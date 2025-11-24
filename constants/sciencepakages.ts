
export type Content = {
  headers: string[]
  color: string
  content: string | string[]
}

export const sciencepackages: Content[] = [
  {
    headers: ["Basic", "Science Lab"],
    color: "#75BF46",
    content: [
      "Perfect for schools new to hands-on science instruction.",
      "Includes Science Lab Manuals and essential experiment materials.",
      "Designed to support observation → investigation → explanation in everyday lessons.",
      "Encourages active exploration using real tools instead of rote memorization.",

    ]
  },
  {
    headers: ["Premium", "Maths Lab"],
    color: "#6C3694",
    content: [
      "Builds on the Basic package",
      "Adds collaborative lab furniture and an immersive science environment.",
      "Includes everything in Basic + classroom setup for group experiments and investigation stations.",
      "Ideal for schools aiming to establish a full, inquiry-driven Science Lab space.",

    ]
  },
]