package com.reapal.demos.model;

import javax.persistence.Column;
import javax.persistence.Table;

/**
 * Created by jack-cooper on 2017/1/15.
 */
@Table(name = "user_role")
public class UserRole extends BaseEntity {

    private String role;
    @Column(name = "user_id",nullable = false)
    private Long userId;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    @Override
    public String toString() {
        return "UserRole{" +
                "role='" + role + '\'' +
                ", userId=" + userId +
                '}';
    }
}
