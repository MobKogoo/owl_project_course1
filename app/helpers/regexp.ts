export const priceRu = (price: number | undefined): string | undefined => {
	if (price) {
		return price
			.toString()
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
	}
};

