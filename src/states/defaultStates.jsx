export const loginDefaultState = {
  email: "",
  password: "",
  loggedIn: false,
  isHero: false
}

export const joinDefaultState = {
  userName: "",
  email: "",
  password: ""
}

export const userDefaultState = {
  userName: "",
  email: "",
  password: ""
}

export const gigsDefaultState = [
  {
    id: 1,
    hero: "hajji",
    desc: "Every moment I shape my destiny with a chisel - I am the carpenter of my own soul.",
    power: "carpenter",
    banner:
      "https://t4.ftcdn.net/jpg/02/47/18/05/360_F_247180504_znprMYCYt6jaK30XfnQyVPRFMQ8M6BYv.jpg"
  },
  {
    id: 2,
    hero: "polds",
    desc: "Leave sooner, drive slower, live longer.",
    power: "Driver",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTofk1HJtDV5zMhAfm8LgCl-xLS5sI-0eSvFw&usqp=CAU"
  },
  {
    id: 3,
    hero: "joseph",
    desc: "I repair what your husband ﬁxed",
    power: "plumber",
    banner:
      "https://www.shutterstock.com/image-photo/plumber-plumbing-bathroom-sink-doing-260nw-1719830740.jpg"
  },
  {
    id: 4,
    hero: "zen",
    desc: "Sweet lover",
    power: "driver",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN2ufSQHvZcq9p3TfxdnyozBev8KJMEuQpPA&usqp=CAU"
  },
  {
    id: 5,
    hero: "rodney",
    desc: "There are some things in life where it's better to receive than to give, and massage is one of them.",
    power: "masseur",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyLAF6kjoAKobkbpRrBEwwcZg9vZK_gJVBA&usqp=CAU"
  },
  {
    id: 6,
    hero: "nicky",
    desc: "You can get a good doctor in a minute and a half. Getting a really good electrician - that's hard.",
    power: "electrician",
    banner:
      "data:image/jpeg;base64,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"
  },
  {
    id: 7,
    hero: "winfred",
    desc: "Take care of your car in the garage, and the car will take care of you on the road.",
    power: "mechanic",
    banner:
      "https://t3.ftcdn.net/jpg/04/34/09/90/360_F_434099061_C1lA1OE8uWeZqFMMXHeKBPW84wjbSRxV.jpg"
  },
  {
    id: 8,
    hero: "felix",
    desc: "A weed is but an unloved flower",
    power: "gardener",
    banner:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRViEwFvsaXYosdXPf5f9s8pm0uTP6zhdG-xDfK396LD_g7ITgxBKv1z9hZzsFBtgr9MI&usqp=CAU"
  }
]
