(defproject clustermap-bvca-cljs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170" :scope "provided"]
                 [org.clojure/core.async "0.2.374" :scope "provided"]
                 [domina "1.0.3"]
                 [jayq "2.5.4"]
                 [org.omcljs/om "0.9.0"]
                 [prismatic/om-tools "0.4.0" :exclusions [org.clojure/clojure]]
                 [sablono "0.4.0"]
                 [hiccups "0.3.0"]
                 [secretary "1.2.3"]
                 [com.andrewmcveigh/cljs-time "0.3.14"]
                 [binaryage/devtools "0.4.1"]
                 [clustermap-components "0.1.0-SNAPSHOT"]
                 ]

  :profiles {:dev {:dependencies [[weasel "0.7.0"]
                                  [figwheel "0.5.0-1"]]}}
  ;;  :exclusions [org.clojure/google-closure-library
  ;;               org.clojure/google-closure-library-third-party
  ;;               goog-jar]

  :jvm-opts ["-Xmx1g"
             "-server"
             "-XX:MaxPermSize=128m"
             "-XX:+CMSClassUnloadingEnabled"
             "-XX:+UseConcMarkSweepGC"]

  :source-paths ["src"]

  :plugins [[lein-cljsbuild "1.1.1"]
            [lein-figwheel "0.5.0-1"]]

  :cljsbuild {
              :builds {:none
                       {:source-paths ["src" "checkouts/clustermap-components/src"]
                        :figwheel {:on-jsload "clustermap.core/init"}
                        :compiler {
                                   :output-to  "resources/public/clustermap.js"
                                   :source-map true
                                   :output-dir "resources/public/cljs"
                                   :main "clustermap.core"
                                   :optimizations :none
                                   :pretty-print true}}

                       :whitespace
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/whitespace/clustermap.js"
                                   :source-map "cljs-out/whitespace/clustermap.js.map"
                                   :output-dir "cljs-out/whitespace/cljs"
                                   :optimizations :whitespace
                                   :pretty-print true
                                   :output-wrapper false}}

                       :simple
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/simple/clustermap.js"
                                   :source-map "cljs-out/simple/clustermap.js.map"
                                   :output-dir "cljs-out/simple/cljs"
                                   :optimizations :simple
                                   :pretty-print false
                                   :output-wrapper false}}

                       :advanced
                       {:source-paths ["src"]
                        :compiler {
                                   :output-to  "cljs-out/advanced/clustermap.js"
                                   :source-map "cljs-out/advanced/clustermap.js.map"
                                   :output-dir "cljs-out/advanced/cljs"
                                   :optimizations :advanced
                                   :output-wrapper false
                                   :externs ["react/externs/react.js"]}}}})
