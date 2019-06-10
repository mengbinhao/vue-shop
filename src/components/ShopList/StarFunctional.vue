<script>
const fullStar = {
	name: 'fullStar',
	render(h) {
		return h('span', {
			class: {
				'star-item': true,
				on: true
			}
		})
	}
}

const halfStar = {
	name: 'halfStar',
	render(h) {
		return h('span', {
			class: {
				'star-item': true,
				half: true
			}
		})
	}
}

const offStar = {
	name: 'offStar',
	render(h) {
		return h('span', {
			class: {
				'star-item': true,
				off: true
			}
		})
	}
}

export default {
	name: 'Star',
	functional: true,
	props: {
		stars: {
			type: Number,
			default: 0,
			validator(val) {
				return val >= 0 && val <= 5
			}
		}
	},
	render(h, context) {
		const {
			props: { stars }
		} = context
		function getChildStars(stars, h) {
			if (stars === 5) {
				return Array.apply(null, {
					length: 5
				}).map(function() {
					return h(fullStar)
				})
			} else if (stars >= 4.5 && stars < 5) {
				return [
					...Array.apply(null, {
						length: 4
					}).map(function() {
						return h(fullStar)
					}),
					h(halfStar)
				]
			} else if (stars >= 4 && stars < 4.5) {
				return [
					...Array.apply(null, {
						length: 4
					}).map(function() {
						return h(fullStar)
					}),
					h(offStar)
				]
			} else if (stars >= 3.5 && stars < 4) {
				return [
					...Array.apply(null, {
						length: 3
					}).map(function() {
						return h(fullStar)
					}),
					h(halfStar),
					h(offStar)
				]
			} else {
				return Array.apply(null, {
					length: 5
				}).map(function() {
					return h(offStar)
				})
			}
		}
		return h(
			'div',
			{
				class: {
					star: true,
					'star-24': true
				}
			},
			getChildStars(stars, h)
		)
	}
}
</script>
