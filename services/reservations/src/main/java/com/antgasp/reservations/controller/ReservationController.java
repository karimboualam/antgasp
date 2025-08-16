package com.antgasp.reservations.controller;
import com.antgasp.reservations.entity.Reservation; import com.antgasp.reservations.service.ReservationService;
import org.springframework.web.bind.annotation.*; import java.util.Map; import java.util.UUID;

@RestController @RequestMapping("/reservations")
public class ReservationController {
  private final ReservationService service;
  public ReservationController(ReservationService s){ this.service=s; }

  @PostMapping public Reservation create(@RequestBody Map<String,String> body){
    return service.create(body.get("offerId"), body.getOrDefault("email","demo@antgasp.local"));
  }
  @GetMapping("/{id}") public Reservation get(@PathVariable UUID id){ return service.get(id); }
}
