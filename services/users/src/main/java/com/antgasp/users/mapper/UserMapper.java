package com.antgasp.users.mapper;
import com.antgasp.users.dto.UserDto; import com.antgasp.users.entity.User;
public class UserMapper {
  public static UserDto toDto(User u){ return new UserDto(u.getId(), u.getEmail(), u.getDisplayName()); }
}
