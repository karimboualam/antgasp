package com.antgasp.reservations.service;
import com.antgasp.reservations.entity.Reservation; import com.antgasp.reservations.repository.ReservationRepository;
import org.springframework.stereotype.Service; import java.util.UUID;

@Service
public class ReservationService {
  private final ReservationRepository repo;
  public ReservationService(ReservationRepository r){ this.repo = r; }
  public Reservation create(String offerId, String email){
    Reservation r = new Reservation(); r.setOfferId(offerId); r.setUserEmail(email); return repo.save(r);
  }
  public Reservation get(UUID id){ return repo.findById(id).orElseThrow(); }
}
