import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  topics?: string[]; // topics é opcional
};

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        if (!token) {
          console.warn("GitHub token não definido em VITE_GITHUB_TOKEN");
        }

        const headers: HeadersInit = {
          Accept: "application/vnd.github.mercy-preview+json", // habilita topics
          ...(token ? { Authorization: `token ${token}` } : {}),
        };

        const res = await fetch(
          "https://api.github.com/users/Igor-Brandalise/repos?sort=updated&per_page=6",
          { headers }
        );

        if (!res.ok) {
          throw new Error(
            `Erro ao buscar repositórios: ${res.status} ${res.statusText}`
          );
        }

        const data: Repo[] = await res.json();

        setRepos(data);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    }

    fetchRepos();
  }, []);

  return (
    <div className="p-4">
      <ul className="space-y-4">
        {repos.map((repo, index) => (
          <motion.li
            key={repo.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-stone-800 p-4 rounded-lg shadow-md hover:shadow-amber-400/20 transition-shadow sm:ml-20 w-[360px] sm:w-[500px] md:w-2xl lg:w-4xl"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-400 text-lg font-semibold transition-colors"
            >
              {repo.name}
            </a>

            {repo.description && (
              <p className="text-sm text-stone-300 mt-1">{repo.description}</p>
            )}

            <div className="flex gap-2 mt-3 flex-wrap text-xs">
              {repo.topics && repo.topics.length > 0 ? (
                repo.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic}
                    className="bg-amber-500/10 text-amber-300 border border-amber-500 rounded-full px-2 py-1"
                  >
                    {topic}
                  </span>
                ))
              ) : (
                <span className="bg-red-700/60 text-amber-300 border border-red-300 rounded-full px-2 py-1">
                  Nenhum tópico detectado
                </span>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
