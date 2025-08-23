# MyShop - Next.js 15 E-commerce App

## Project Description
MyShop is a simple e-commerce web application built using **Next.js 15 (App Router)** with authentication powered by **NextAuth.js**.  
Users can view products, see product details, and after logging in, access a protected page to add new products.

---

## Live Demo
[View Live Site](hhttp://assaitment-10.vercel.app/)

## GitHub Repository
[View Repository](https://github.com/skrased2006/Scic_next_js_project)

---

## Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo


npm install


| Route                    | Description                                | Access    |
| ------------------------ | ------------------------------------------ | --------- |
| `/`                      | Landing Page with Hero, Highlights, Footer | Public    |
| `/login`                 | Login Page (Google  login)    | Public    |
| `/products`              | List of all products                       | Public    |
| `/products/[id]`         | Details of a single product                | Public    |
| `/dashboard/add-product` | Add new product (form)                     | Protected |
