import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  languages: string[];
  updated_at: string;
};

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/Igor-Brandalise/repos?sort=updated&per_page=6");
        const data = await res.json();

        // Para cada repositório, buscar as linguagens
        const reposWithLanguages = await Promise.all(
          data.map(async (repo: any) => {
            const langRes = await fetch(`https://api.github.com/repos/Igor-Brandalise/${repo.name}/languages`);
            const langData = await langRes.json();

            const topLanguages = Object.keys(langData).slice(0, 3); // pega as 3 primeiras
            return {
              name: repo.name,
              html_url: repo.html_url,
              description: repo.description,
              languages: topLanguages
            };
          })
        );

        setRepos(reposWithLanguages);
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
            key={repo.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-stone-800 p-4 rounded-lg shadow-md hover:shadow-amber-400/20 transition-shadow w-4xl ml-20"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 hover:text-amber-400 text-lg font-semibold transition-colors"
            >
              {repo.name}
            

            {repo.description && (
              <p className="text-sm text-stone-300 mt-1">{repo.description}</p>
            )}

            <div className="flex gap-2 mt-3 flex-wrap text-xs">
              {repo.languages.length > 0 ? (
                repo.languages.map((lang) => (
                  <span
                    key={lang}
                    className="bg-amber-500/10 text-amber-300 border border-amber-500 rounded-full px-2 py-1"
                  >
                    {lang}
                  </span>
                ))
              ) : (
                <span className="bg-red-700/60 text-amber-300 border border-red-300 rounded-full px-2 py-1">Nenhuma linguagem detectada</span>
              )}

            </div>
              </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
