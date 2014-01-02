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
clustermap.core.listen = (function listen(el,type){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,e);
}));
return out;
});
clustermap.core.jsonp = (function jsonp(uri){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var req = (new goog.net.Jsonp((new goog.Uri(uri))));req.send(null,(function (res){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,res);
}));
return out;
});
clustermap.core.query_url = (function query_url(q){return [cljs.core.str(clustermap.core.wiki_search_url),cljs.core.str(q)].join('');
});
clustermap.core.user_query = (function user_query(){return goog.dom.getElement("query").value;
});
clustermap.core.render_query = (function render_query(results){return [cljs.core.str("<ul>"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (){var iter__3984__auto__ = (function iter__28345(s__28346){return (new cljs.core.LazySeq(null,(function (){var s__28346__$1 = s__28346;while(true){
var temp__4092__auto__ = cljs.core.seq(s__28346__$1);if(temp__4092__auto__)
{var s__28346__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__28346__$2))
{var c__3982__auto__ = cljs.core.chunk_first(s__28346__$2);var size__3983__auto__ = cljs.core.count(c__3982__auto__);var b__28348 = cljs.core.chunk_buffer(size__3983__auto__);if((function (){var i__28347 = 0;while(true){
if((i__28347 < size__3983__auto__))
{var result = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__3982__auto__,i__28347);cljs.core.chunk_append(b__28348,[cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''));
{
var G__28349 = (i__28347 + 1);
i__28347 = G__28349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__28348),iter__28345(cljs.core.chunk_rest(s__28346__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__28348),null);
}
} else
{var result = cljs.core.first(s__28346__$2);return cljs.core.cons([cljs.core.str("<li>"),cljs.core.str(result),cljs.core.str("</li>")].join(''),iter__28345(cljs.core.rest(s__28346__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__3984__auto__(results);
})())),cljs.core.str("</ul>")].join('');
});
clustermap.core.init = (function init(){return clustermap.nav.init();
});
clustermap.core.init();