package com.reapal.demos;

import com.reapal.demos.controller.LoginController;
import com.reapal.demos.controller.UserController;
import com.reapal.demos.model.User;
import com.reapal.demos.service.UserService;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

/**
 * Application Tester.
 *
 * @author <Authors name>
 * @version 1.0
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(Application.class)
@WebAppConfiguration
public class ApplicationTest {

    @Autowired
    private LoginController loginController;

    @Before
    public void before() throws Exception {
    }

    @After
    public void after() throws Exception {
    }

    /**
     * Method: main(String[] args)
     */
//    @Test
    public void test() {
        User user = new User();
        for(int i = 1 ; i < 30 ; i ++) {
            user.setId(null);
            user.setUsername("test"+i);
            user.setPassword("test"+i);
            user.setEmail("test"+i+"@qq.com");
            user.setQq("qq"+i);
            user.setTel("tel"+i);
            loginController.signup(user, null);
        }

    }


}
