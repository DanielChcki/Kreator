document.addEventListener(
	'DOMContentLoaded',

	function () {
		const nav = document.querySelector('.navbar')
		const allnNavItems = document.querySelectorAll('.navbar')
		const navList = document.querySelector('.navbar-collapse')

		function addShadow() {
			if (window.scrollY >= 300) {
				nav.classList.add('shadow-bg')
			} else {
				nav.classList.remove('shadow-bg')
			}
		}

		allnNavItems.forEach(item => item.addEventListener('click', () => navList.classList.remove('show')))

		window.addEventListener('scroll', addShadow)
	}
)

const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseE5 => new bootstrap.Collapse(false))
