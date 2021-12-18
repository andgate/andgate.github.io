import { marked } from 'marked'
import bioText from 'bundle-text:./bio.md'

document.getElementById('website-bio-body').innerHTML = marked(bioText)
