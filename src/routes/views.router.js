import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  if (req.user) {
    res.redirect("products");
  } else {
    res.render("login", { title: "Inicia session para ver los productos" });
  }
});

router.get("/register", (req, res) => {
  res.render("register", { title: "pagina" });
});

router.get("/products", (req, res) => {
  if (!req.user) {
    res.redirect("/");
  } else {
    if (req.user){
      res.render("products", {user:req.user.email})
    }
    else {
      res.send ({message:'inicar session para ver los productos'})
    }
  }
});


export default router;
