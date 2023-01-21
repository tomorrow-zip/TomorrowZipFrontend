# TomorrowZip Frontend

SKT FLY AI 2기 패기반 내일의 집 프로젝트 - 프론트엔드

# 사용 기술 stack

## 개발 환경

-   `eslint`
-   `prettier`
-   `husky`
-   `lint-staged`

## 개발 Core Stack

-   `React`(v18.x.x)
-   ...

# 프로젝트 Setup

1. Prettier & ESLint 설정

    **Visual Studio Code** 확장 프로그램 (혹은 **Web Storm** 플러그인

    - prettier
    - eslint

2. **yarn** 설치

    Mac

    ```bash
    brew install yarn
    ```

3. 프로젝트 **clone**

    ```bash
    git clone https://github.com/tomorrow-zip/TomorrowZipFrontend.git
    ```

4. 프로젝트 패키지 **설치**

    `node_modules` 폴더 생성 확인

    ```bash
      yarn install or yarn
    ```

5. 프로젝트 **dev** script

    배포 이전 개발할 때, 로컬호스트로 개발을 진행하는 방법

    ```bash
    yarn dev
    ```

    **localhost:3000** 번으로 개발 서버가 열리는 것을 확인해주세요.

6. 프로젝트 **build** script

    프로젝트를 빌드하는 스크립트

    ```bash
    yarn build
    ```

7. 프로젝트 **preview** script

    build 결과를 테스트 해보는 스크립트

    ```bash
    pnpm start
    ```

    **localhost:3000** 빌드용 개발 서버가 열리는 것을 확인해주세요!

# Commit Rules

-   **feat** : 새로운 기능 추가
-   **env** : 개발 환경 셋업
-   **chore** : 빌드 업무 수정, 패키지(package.json...) 수정
-   **style** : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
-   **refactor** : 코드 리펙토링
-   **docs** : md 문서 수정
-   **test** : 테스트 코드, 리펙토링 테스트 코드 추가
-   **fix** : 버그 수정
