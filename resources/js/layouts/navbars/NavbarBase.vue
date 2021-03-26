<template functional>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <button
            type="button"
            data-toggle="collapse"
            data-target="#navbar-content"
            aria-controls="navbar-content"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container">
            <div class="w-100">
                <div id="navbar-content" class="collapse navbar-collapse">
                    <div class="navbar-container mx-auto">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>