<div class="card">
	<slot />
</div>

<style>
	.card {
		background: rgba(28, 17, 17, 0.37);
		padding: 20px;
		border-radius: 6px;
		width: auto;
		height: auto;
		text-align: center;
		box-shadow: 0px 2px 4px rgba(50, 0, 0, 0.1);
	}
	.card:hover{
		box-shadow: 0px 2px 4px rgba(207, 129, 129, 0.7);
	}
</style>
