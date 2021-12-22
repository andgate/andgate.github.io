import alonzoDesc from '../../assets/text/projects/alonzo.txt'
import cosmicCalamityDesc from '../../assets/text/projects/cosmic-calamity.txt'
import mandelbulbDesc from '../../assets/text/projects/mandelbulb.txt'
import mnistDesc from '../../assets/text/projects/mnist.txt'
import alonzoBanner from '../../assets/images/project-banners/alonzo.png'
import cosmicCalamityBanner from '../../assets/images/project-banners/cosmic-calamity.png'
import mandelbulbBanner from '../../assets/images/project-banners/mandelbulb.png'
import mnistBanner from '../../assets/images/project-banners/mnist.png'

export type Project = {
  name: string,
  bannerImage: string
  url: string,
  desc: string,
}

function project(name: string, bannerImage: string, url: string, desc: string): Project {
  return { name, bannerImage, url, desc }
}

export const PROJECT_LIST: Project[] = [
  project(
    'Alonzo',
    alonzoBanner,
    'https://andgate.github.io/alonzo',
    alonzoDesc
  ),
  project(
    'Cosmic Calamity',
    cosmicCalamityBanner,
    'https://andgate.github.io/cosmic-calamity',
    cosmicCalamityDesc
  ),
  project(
    'Mandelbulb Explorer',
    mandelbulbBanner,
    'https://andgate.github.io/mandelbulb',
    mandelbulbDesc
  ),
  project(
    'MNIST Demo',
    mnistBanner,
    'https://andgate.github.io/mnist',
    mnistDesc
  ),
] 