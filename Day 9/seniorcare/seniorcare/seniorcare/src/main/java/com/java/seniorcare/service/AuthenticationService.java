package com.java.seniorcare.service;

import com.java.seniorcare.dto.request.ForgotPasswordRequest;
import com.java.seniorcare.dto.request.LoginRequest;
import com.java.seniorcare.dto.request.RegisterRequest;
import com.java.seniorcare.dto.response.BasicResponse;
import com.java.seniorcare.dto.response.LoginResponse;


public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);

}