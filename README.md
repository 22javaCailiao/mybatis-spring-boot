
- [Spring Boot 1.4.3.RELEASE](https://github.com/spring-projects/spring-boot)
- [mybatis-spring-boot-starter 1.1.1](https://github.com/mybatis/spring-boot-starter)
- [mapper-spring-boot-starter 1.0.0](https://github.com/abel533/mapper-boot-starter)
- [pagehelper-spring-boot-starter 1.0.0](https://github.com/pagehelper/pagehelper-spring-boot)

## 特点
 * 1、实现了使用spring-security实现认证的过程以及原请求信息的缓存及恢复
 * 2、使用baseMapper，baseService，baseController简化了编码任务，开发只需extends即可完成基础的功能
 * 3、使用springloaded插件，实现了debug模式下的热加载（**idea中需要ctrl+F9**）

## 项目依赖
```xml
<!--mybatis-->
<dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <!-- 不使用默认的默认的日志框架 Logback -->
            <exclusions>
                <exclusion>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-starter-logging</artifactId>
                </exclusion>
            </exclusions>
        </dependency>
        <!--权限-->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <!-- 引入log4j2依赖 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-log4j2</artifactId>
        </dependency>
        <dependency>  <!-- 加上这个才能辨认到log4j2.yml文件 -->
            <groupId>com.fasterxml.jackson.dataformat</groupId>
            <artifactId>jackson-dataformat-yaml</artifactId>
        </dependency>
        <!-- 支持aop编程  包含spring-aop 和  AspectJ -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>
        <!-- 支持freemarker作为模板引擎 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-freemarker</artifactId>
        </dependency>
        <!-- 包含常用的测试所需的依赖，如 JUnit、Hamcrest、Mockito 和 spring-test 等。 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
        </dependency>
        <!-- 自动应用代码更改到最新的App上面(热部署) idea: ctrl+F9 -->

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>

        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-core</artifactId>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.core</groupId>
            <artifactId>jackson-databind</artifactId>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.datatype</groupId>
            <artifactId>jackson-datatype-joda</artifactId>
        </dependency>
        <dependency>
            <groupId>com.fasterxml.jackson.module</groupId>
            <artifactId>jackson-module-parameter-names</artifactId>
        </dependency>
        
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid</artifactId>
            <version>1.0.11</version>
        </dependency>

        <!--mybatis-->
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
            <version>1.2.0</version>
        </dependency>
        <!--mapper-->
        <dependency>
            <groupId>tk.mybatis</groupId>
            <artifactId>mapper-spring-boot-starter</artifactId>
            <version>1.0.0</version>
        </dependency>
        <!--pagehelper-->
        <dependency>
            <groupId>com.github.pagehelper</groupId>
            <artifactId>pagehelper-spring-boot-starter</artifactId>
            <version>1.0.0</version>
        </dependency>

```

当使用低版本的 Spring Boot 时（例如 1.3 或更低版本），你还可以尝试 mapper 和 pagehelper starter 的 0.1.0 版本（兼容高版本 Spring Boot）。

## application.yml 配置

完整配置可以参考 [src/main/resources/application.yml](https://github.com/abel533/MyBatis-Spring-Boot/blob/master/src/main/resources/application.yml) ，和 MyBatis 相关的部分配置如下：

```yaml
server:
    port: 8080
    context-path:

spring:
    datasource:
        name: test
        url: jdbc:mysql://10.168.16.116:3306/test?useUnicode=true&characterEncoding=utf8
        username: root
        password: devApp2013
        # 使用druid数据源
        type: com.alibaba.druid.pool.DruidDataSource
        driver-class-name: com.mysql.jdbc.Driver
        filters: stat
        maxActive: 20
        initialSize: 1
        maxWait: 60000
        minIdle: 1
        timeBetweenEvictionRunsMillis: 60000
        minEvictableIdleTimeMillis: 300000
        validationQuery: select 'x'
        testWhileIdle: true
        testOnBorrow: false
        testOnReturn: false
        poolPreparedStatements: true
        maxOpenPreparedStatements: 20
    mvc:
        view:
            prefix: /templates/
            suffix: .ftl
    freemarker:
        cache: false
        request-context-attribute: request
    mail:
      host: smtp.qq.com
      username: project@qq.com
      password: xxxxxx
mybatis:
    type-aliases-package: com.reapal.demos.model
    mapper-locations: classpath:mapper/*.xml

mapper:
    mappers:
        - com.reapal.demos.mapper.BaseMapper
    not-empty: false
    identity: MYSQL

pagehelper:
    helperDialect: mysql
    reasonable: true
    supportMethodsArguments: true
    params: count=countSql
```

## log4j配置
``` yml
Configuration:
  status: warn

  Properties: # 定义全局变量
    Property: # 缺省配置（用于开发环境）。其他环境需要在VM参数中指定，如下：
      #测试：-Dlog.level.console=warn -Dlog.level.xjj=trace
      #生产：-Dlog.level.console=warn -Dlog.level.xjj=info
      - name: log.level.console
        value: trace
      - name: log.level.xjj
        value: trace
      - name: log.path
        value: ../logs
      - name: project.name
        value: my-spring-boot

  Appenders:
    Console:  #输出到控制台
      name: CONSOLE
      target: SYSTEM_OUT
      ThresholdFilter:
        level: ${sys:log.level.console} # “sys:”表示：如果VM参数中没指定这个变量值，则使用本文件中定义的缺省全局变量值
        onMatch: ACCEPT
        onMismatch: DENY
      PatternLayout:
        pattern: "%d{yyyy-MM-dd HH:mm:ss,SSS}:%4p %t (%F:%L) - %m%n"
    RollingFile: # 输出到文件，超过128MB归档
      - name: ROLLING_FILE
        ignoreExceptions: false
        fileName: ${log.path}/${project.name}.log
        filePattern: "${log.path}/$${date:yyyy-MM}/${project.name}-%d{yyyy-MM-dd}-%i.log.gz"
        PatternLayout:
          pattern: "%d{yyyy-MM-dd HH:mm:ss,SSS}:%4p %t (%F:%L) - %m%n"
        Policies:
          SizeBasedTriggeringPolicy:
            size: "128 MB"
        DefaultRolloverStrategy:
          max: 1000

  Loggers:
    Root:
      level: info
      AppenderRef:
        - ref: CONSOLE
        - ref: ROLLING_FILE
    Logger: # 为com.reapal包配置特殊的Log级别，方便调试
      - name: com.reapal
        additivity: false
        level: ${sys:log.level.reapal}
        AppenderRef:
          - ref: CONSOLE
          - ref: ROLLING_FILE

```

