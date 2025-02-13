import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH;


export default {
    input: 'src/app/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'src/app/build/bundle.js'
    },
    plugins: [
        svelte({
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            }
        }),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        //css({ output: 'bundle.css' }),

        postcss({
            config: {
                path: "./postcss.config.js"
            },            
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        resolve({
            dedupe: ['svelte']
        }),

        commonjs({ 
            include: './node_modules/**',
        }),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        //  !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false,
        buildDelay: 1000,
    }
};