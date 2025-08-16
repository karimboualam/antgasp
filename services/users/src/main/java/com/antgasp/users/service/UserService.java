package com.antgasp.users.service;
import com.antgasp.users.dto.UserDto; import com.antgasp.users.entity.User;
import com.antgasp.users.mapper.UserMapper; import com.antgasp.users.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  private final UserRepository repo;
  public UserService(UserRepository repo){ this.repo = repo; }
  public UserDto me(String email){
    User u = repo.findByEmail(email).orElseGet(() -> repo.save(new User(email, "New User")));
    return UserMapper.toDto(u);
  }
}
