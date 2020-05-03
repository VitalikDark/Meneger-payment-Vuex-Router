<template>
	<div>
		<nav>
			<div><span>{{date }}</span></div>
			<router-link to="/">Tasks</router-link>
			<ul>
				<router-link tag="li" to="/" exact>
					<a href="#">Create</a>
				</router-link>
				<router-link tag="li" to="/list" >
					<a href="#">List</a>
				</router-link>
				<router-link tag="li" to="/payment" >
					<a href="#">Payment</a>
				</router-link>
			</ul>
		</nav>
	</div>
</template>


<script>
export default {
	data() {
		return {
			date: new Date()
		}
	},
	mounted() {
	setInterval(() => {
      this.date = new Date()
    }, 1000)


	}

}
</script>

<style>
	
</style>