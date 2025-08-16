package com.antgasp.products.config;

import com.antgasp.products.entity.Product;
import com.antgasp.products.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInit {
  @Bean CommandLineRunner seed(ProductRepository repo) {
    return args -> {
      if (repo.count() > 0) return;
      repo.save(new Product("Panier fruits & légumes", 3.99, "Bio Marché", "Paris",
        "https://picsum.photos/seed/antgasp1/640/360"));
      repo.save(new Product("Surprise boulangerie", 2.50, "Boulangerie du Coin", "Paris",
        "https://picsum.photos/seed/antgasp2/640/360"));
      repo.save(new Product("Panier traiteur", 5.90, "Chez Nadia", "Lyon",
        "https://picsum.photos/seed/antgasp3/640/360"));
    };
  }
}
