export const asyncHandler = {
  setLoading(key) {
    this.setState({
      [key]: {
        loading: true,
        data: null,
        error: null,
      },
    });
  },

  setError(key, error) {
    this.setState({
      [key]: {
        loading: false,
        data: null,
        error,
      },
    });
  },

  setData(key, data) {
    this.setState({
      [key]: {
        loading: false,
        data,
        error: null,
      },
    });
  },
};

export const asyncInitState = {
  loading: false,
  data: [
    {
      id: 1,
      name: "커피 컵",
      imageUrl:
        "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png",
      price: 10000,
    },
    {
      id: 2,
      name: "커피컵 종이홀더",
      imageUrl:
        "https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/coffee_cup_paper_sleeve.png",
      price: 1000,
    },
  ], //null,
  error: null,
};
