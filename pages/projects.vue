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
                    <div class="p-image"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                    <div class="p-title">
                        <h3>Project Name</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="#">View Code</a></div>
                        <div class="demo"><a href=""><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                    <div class="p-title">
                        <h3>Project Name</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="#">View Code</a></div>
                        <div class="demo"><a href=""><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                    <div class="p-title">
                        <h3>Project Name</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="#">View Code</a></div>
                        <div class="demo"><a href=""><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                    <div class="p-title">
                        <h3>Project Name</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="#">View Code</a></div>
                        <div class="demo"><a href=""><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
               <li class="project-item">
                    <div class="p-image"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                    <div class="p-title">
                        <h3>Project Name</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="#">View Code</a></div>
                        <div class="demo"><a href=""><i class="fa fa-external-link"></i></a></div>
                    </div>
                </li>
                <li class="project-item">
                    <div class="p-image"><img src="https://files.muzli.space/25ab66378ff36703c6b7384c8b292cba.jpeg" alt=""></div>
                    <div class="p-title">
                        <h3>Project Name</h3>
                    </div>
                    <div class="p-meta">
                        <div class="view-code"><a href="#">View Code</a></div>
                        <div class="demo"><a href=""><i class="fa fa-external-link"></i></a></div>
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
        background-color: #FFFFFF;
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.05);
        transition: box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out;
        transform: translateZ(0);
        display: flex;
        flex-direction: column;
    }

    li.project-item:hover {
        box-shadow: rgba(45,45,45,0.05) 0px 2px 2px, rgba(49,49,49,0.05) 0px 4px 4px, rgba(42,42,42,0.05) 0px 8px 8px, rgba(32,32,32,0.05) 0px 16px 16px, rgba(49,49,49,0.05) 0px 32px 32px, rgba(35,35,35,0.05) 0px 64px 64px;
        transform: translate(0, -4px);
        /* z-index: 999; */
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
        /* padding: 10%; */
        display: flex;
        align-items: center;
        padding-left: 15px;
    }
    .p-meta {
        height: 50px;
        border-top: 1px solid #EAF1F6;
        color: #999;
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
        color: #999;
    }

</style>
