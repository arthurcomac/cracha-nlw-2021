const links = {
  //linkedin: 'in/arthur-machado-a72411219/',
  github: 'arthurcomac',
  instagram: 'arthurmy25/',
  twitter: 'rocketseat',
  youtube: 'rocketseat',
  facebook: 'rocketseat'
}

function ChangeRedes() {
  for (let li of SocialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${links[social]}`
  }
}
ChangeRedes()

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserPhoto.src = data.avatar_url
    })
}
GetGitHubProfileInfos()
