<template>
    <section class="projects">
        <h1>Projects</h1>
        <div class="projects-container">
            <ul class="project-list">
                <!-- <li class="project-item">
                    <div class="tile">
                        <div class="pimage"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                        <div class="ptitle">Project Name</div>
                        <div class="postMeta">
                            <div class="view-code">View Code</div>
                            <div class="demo"><i class="fa fa-external-link"></i></div>
                        </div>
                    </div>
                </li> -->
                <li class="project-item">
                    <div class="p-image"><img src="https://cdn.dribbble.com/users/310943/screenshots/3443144/feedly-bot.png" alt=""></div>
                    <div class="p-title">
                        <h3>Twitter Bot</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/twitter-bot" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://twitter.com/dailydevcodes" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://1ycbx02rgnsa1i87hd1i7v1r-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/product-hunt-2.png" alt=""></div>
                    <div class="p-title">
                        <h3>Product Hunt Clone</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/vue-producthunt" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://vue-producthunt-clone.netlify.com" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://t3.ftcdn.net/jpg/00/11/34/68/240_F_11346882_xYOMm9QwkASUPdaRxuG64lvQrjClRcTE.jpg" alt=""></div>
                    <div class="p-title">
                        <h3>Pictionary</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/vue-pictionary" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://vue-pictionary.netlify.com/" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://cdn.dribbble.com/users/422285/screenshots/2221565/pomodoro.png" alt=""></div>
                    <div class="p-title">
                        <h3>Pomodoro Timer App</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/pomodoro-app" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://pomodora-time-tracker.netlify.com" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
               <li class="project-item">
                    <div class="p-image"><img src="https://st2.depositphotos.com/4341177/8219/v/950/depositphotos_82192910-stock-illustration-hand-drawn-vintage-pastry-shop.jpg" alt=""></div>
                    <div class="p-title">
                        <h3>Pastry Shop Website</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/ember-pastry-shop" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://ember-pastry-shop.netlify.com" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://cdn.dribbble.com/users/441305/screenshots/5477297/dribbble-school_4x.png" alt=""></div>
                    <div class="p-title">
                        <h3>React Powered TODO App</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/react-todo-app" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://dry-mountain-79163.herokuapp.com" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://cdn.dribbble.com/users/136131/screenshots/1097442/login___notification.gif" alt=""></div>
                    <div class="p-title">
                        <h3>Responsive Form - Dribble</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/responsive-form" target="_blank">View Code</a></div>
                        <div class="demo"><a href="https://dribble-responsive-form.netlify.com/" target="_blank"><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://cdn.dribbble.com/users/34632/screenshots/5852676/talent_search_4x.png" alt=""></div>
                    <div class="p-title">
                        <h3>Search Application</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="https://github.com/ruphaa/search-app" target="_blank">View Code</a></div>
                        <!-- <div class="demo"><a href="https://dribble-responsive-form.netlify.com/" target="_blank"><i class="fa fa-external-link"></i></a></div> -->
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
    .projects {
        margin-top: 50px;
        margin: 50px 20px 0 20px;
    }
    .projects h1 {
        font-size: 36px;
        font-weight: 800;
    }
    .projects .projects-container {
        margin-top: 50px;
        margin-bottom: 50px;
    }

    ul.project-list {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(3, minmax(280px, 1fr));
        grid-gap: 5vw;
    }

    li.project-item {
        height: 400px;
        width: 100%;
        background-color: var(--white-color);
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.05);
        transition: box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out;
        transform: translateZ(0);
        display: flex;
        flex-direction: column;
    }

    li.project-item:hover {
        box-shadow: rgba(45,45,45,0.05) 0px 2px 2px, rgba(49,49,49,0.05) 0px 4px 4px, rgba(42,42,42,0.05) 0px 8px 8px, rgba(32,32,32,0.05) 0px 16px 16px, rgba(49,49,49,0.05) 0px 32px 32px, rgba(35,35,35,0.05) 0px 64px 64px;
        transform: translate(0, -4px);
    }

    .p-image {
        flex: 1;
    }
    .p-image img {
        width: 100%;
        height: 300px;
    }
    .p-title {
        height: 20%;
        font-size: 15px;
        display: flex;
        align-items: center;
        padding-left: 15px;
    }
    .p-meta {
        height: 50px;
        border-top: 1px solid var(--lightest-grey-color);
        color: var(--normal-grey-color);
        padding: 12px 15px;
        display: flex;
        font-size: 14px;
        text-decoration: underline;
    }
    .p-meta .view-code {
        flex: 1;
    }
    .p-meta .demo {
        align-self: flex-end;
    }
    .p-meta a {
        text-decoration: none;
        color: var(--normal-grey-color);
    }
    @media only screen and (max-width: 1000px) {
       ul.project-list {
           display: grid;
           grid-template-columns: auto;
       }
    }

</style>
