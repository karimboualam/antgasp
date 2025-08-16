package com.antgasp.products.controller;

import com.antgasp.products.entity.Product;
import com.antgasp.products.service.ProductService;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController @RequestMapping("/products")
public class ProductController {
  private final ProductService service;
  public ProductController(ProductService service) { this.service = service; }

  @GetMapping
  public Map<String, Object> list(@RequestParam(required = false) String city,
                                  @RequestParam(required = false) String q) {
    List<Product> items = service.list(city, q);
    Map<String, Object> res = new HashMap<>();
    res.put("items", items);
    return res;
  }
}
