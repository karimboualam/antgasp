package com.antgasp.reservations.repository;
import com.antgasp.reservations.entity.Reservation; import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;
public interface ReservationRepository extends JpaRepository<Reservation, UUID> {}
