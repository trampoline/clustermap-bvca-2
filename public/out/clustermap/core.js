// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.Uri');
goog.require('clustermap.nav');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('clojure.browser.repl');
goog.require('clustermap.nav');
goog.require('cljs.core.async');
goog.require('clojure.browser.repl');
goog.require('goog.net.Jsonp');
goog.require('goog.events');
clustermap.core.wiki_search_url = "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";
clustermap.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
clustermap.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.call(null);var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.call(null,out,res);
}));
return out;
});
clustermap.core.query_url = (function query_url(q){return [cljs.core.str(clustermap.core.wiki_search_url),cljs.core.str(q)].join('');
});
clustermap.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
clustermap.core.render_query = (function render_query(results){return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__3984__auto__ = (function iter__14320(s__14321){return (new cljs.core.LazySeq(null,(function (){var s__14321__$1 = s__14321;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14321__$1);if(temp__4092__auto__)
{var s__14321__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14321__$2))
{var c__3982__auto__ = cljs.core.chunk_first.call(null,s__14321__$2);var size__3983__auto__ = cljs.core.count.call(null,c__3982__auto__);var b__14323 = cljs.core.chunk_buffer.call(null,size__3983__auto__);if((function (){var i__14322 = 0;while(true){
if((i__14322 < size__3983__auto__))
{var result = cljs.core._nth.call(null,c__3982__auto__,i__14322);cljs.core.chunk_append.call(null,b__14323,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));
{
var G__14324 = (i__14322 + 1);
i__14322 = G__14324;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14323),iter__14320.call(null,cljs.core.chunk_rest.call(null,s__14321__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14323),null);
}
} else
{var result = cljs.core.first.call(null,s__14321__$2);return cljs.core.cons.call(null,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__14320.call(null,cljs.core.rest.call(null,s__14321__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__.call(null,results);
})())),cljs.core.str("</ul>")].join('');
});
clustermap.core.init = (function init(){return clustermap.nav.init.call(null);
});
clustermap.core.init.call(null);

//# sourceMappingURL=core.js.map