package com.antgasp.users.dto;
import java.util.UUID;
public record UserDto(UUID id, String email, String displayName) {}
