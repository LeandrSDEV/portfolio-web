import { type Project } from '../types/project'
import { projectsMock } from '../mocks/projects.mock'

const API_URL = import.meta.env.VITE_API_URL

export async function getProjects(): Promise<Project[]> {
  if (!API_URL) {
    return Promise.resolve(projectsMock)
  }

  const response = await fetch(`${API_URL}/projects`)
  return response.json()
}
