// Compiled by ClojureScript 0.0-2322
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__51078,args){var map__51080 = p__51078;var map__51080__$1 = ((cljs.core.seq_QMARK_(map__51080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51080):map__51080);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51080__$1,cljs.core.constant$keyword$1592);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__51078,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__51078,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__51081){
var p__51078 = cljs.core.first(arglist__51081);
var args = cljs.core.rest(arglist__51081);
return log__delegate(p__51078,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__51082){var map__51084 = p__51082;var map__51084__$1 = ((cljs.core.seq_QMARK_(map__51084))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51084):map__51084);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51084__$1,cljs.core.constant$keyword$1593);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__51085,callback){var map__51087 = p__51085;var map__51087__$1 = ((cljs.core.seq_QMARK_(map__51087))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51087):map__51087);var msg = map__51087__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,cljs.core.constant$keyword$1594);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,cljs.core.constant$keyword$1595);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51087__$1,cljs.core.constant$keyword$1596);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__51087,map__51087__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__51087,map__51087__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();figwheel.client.js_reload(file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);
return cljs.core.async.close_BANG_(out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__51088,p__51089){var map__51092 = p__51088;var map__51092__$1 = ((cljs.core.seq_QMARK_(map__51092))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51092):map__51092);var opts = map__51092__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51092__$1,cljs.core.constant$keyword$1597);var map__51093 = p__51089;var map__51093__$1 = ((cljs.core.seq_QMARK_(map__51093))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51093):map__51093);var d = map__51093__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51093__$1,cljs.core.constant$keyword$1598);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1596,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__51094,p__51095){var map__51137 = p__51094;var map__51137__$1 = ((cljs.core.seq_QMARK_(map__51137))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51137):map__51137);var opts = map__51137__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51137__$1,cljs.core.constant$keyword$1599);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51137__$1,cljs.core.constant$keyword$1600);var map__51138 = p__51095;var map__51138__$1 = ((cljs.core.seq_QMARK_(map__51138))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51138):map__51138);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51138__$1,cljs.core.constant$keyword$1601);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__51137,map__51137__$1,opts,on_jsload,before_jsload,map__51138,map__51138__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__51137,map__51137__$1,opts,on_jsload,before_jsload,map__51138,map__51138__$1,files){
return (function (state_51161){var state_val_51162 = (state_51161[(1)]);if((state_val_51162 === (6)))
{var inst_51143 = (state_51161[(7)]);var inst_51152 = (state_51161[(2)]);var inst_51153 = cljs.core.PersistentVector.EMPTY_NODE;var inst_51154 = [inst_51143];var inst_51155 = (new cljs.core.PersistentVector(null,1,(5),inst_51153,inst_51154,null));var inst_51156 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_51155);var state_51161__$1 = (function (){var statearr_51163 = state_51161;(statearr_51163[(8)] = inst_51152);
return statearr_51163;
})();var statearr_51164_51178 = state_51161__$1;(statearr_51164_51178[(2)] = inst_51156);
(statearr_51164_51178[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_51162 === (5)))
{var inst_51159 = (state_51161[(2)]);var state_51161__$1 = state_51161;return cljs.core.async.impl.ioc_helpers.return_chan(state_51161__$1,inst_51159);
} else
{if((state_val_51162 === (4)))
{var state_51161__$1 = state_51161;var statearr_51165_51179 = state_51161__$1;(statearr_51165_51179[(2)] = null);
(statearr_51165_51179[(1)] = (5));
return cljs.core.constant$keyword$1100;
} else
{if((state_val_51162 === (3)))
{var inst_51143 = (state_51161[(7)]);var inst_51146 = console.debug("Figwheel: loaded these files");var inst_51147 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1598,inst_51143);var inst_51148 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_51147], 0));var inst_51149 = console.log(inst_51148);var inst_51150 = cljs.core.async.timeout((10));var state_51161__$1 = (function (){var statearr_51166 = state_51161;(statearr_51166[(9)] = inst_51149);
(statearr_51166[(10)] = inst_51146);
return statearr_51166;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51161__$1,(6),inst_51150);
} else
{if((state_val_51162 === (2)))
{var inst_51143 = (state_51161[(7)]);var inst_51143__$1 = (state_51161[(2)]);var inst_51144 = cljs.core.not_empty(inst_51143__$1);var state_51161__$1 = (function (){var statearr_51167 = state_51161;(statearr_51167[(7)] = inst_51143__$1);
return statearr_51167;
})();if(cljs.core.truth_(inst_51144))
{var statearr_51168_51180 = state_51161__$1;(statearr_51168_51180[(1)] = (3));
} else
{var statearr_51169_51181 = state_51161__$1;(statearr_51169_51181[(1)] = (4));
}
return cljs.core.constant$keyword$1100;
} else
{if((state_val_51162 === (1)))
{var inst_51139 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_51140 = figwheel.client.add_request_urls(opts,files);var inst_51141 = figwheel.client.load_all_js_files(inst_51140);var state_51161__$1 = (function (){var statearr_51170 = state_51161;(statearr_51170[(11)] = inst_51139);
return statearr_51170;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51161__$1,(2),inst_51141);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__51137,map__51137__$1,opts,on_jsload,before_jsload,map__51138,map__51138__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__51137,map__51137__$1,opts,on_jsload,before_jsload,map__51138,map__51138__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51174 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_51174[(0)] = state_machine__5694__auto__);
(statearr_51174[(1)] = (1));
return statearr_51174;
});
var state_machine__5694__auto____1 = (function (state_51161){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51161);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51175){if((e51175 instanceof Object))
{var ex__5697__auto__ = e51175;var statearr_51176_51182 = state_51161;(statearr_51176_51182[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51161);
return cljs.core.constant$keyword$1100;
} else
{throw e51175;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__51183 = state_51161;
state_51161 = G__51183;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51161){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__51137,map__51137__$1,opts,on_jsload,before_jsload,map__51138,map__51138__$1,files))
})();var state__5710__auto__ = (function (){var statearr_51177 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_51177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__51137,map__51137__$1,opts,on_jsload,before_jsload,map__51138,map__51138__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__51184,link_href){var map__51186 = p__51184;var map__51186__$1 = ((cljs.core.seq_QMARK_(map__51186))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51186):map__51186);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,cljs.core.constant$keyword$1596);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51186__$1,cljs.core.constant$keyword$1598);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some((function (l){if(figwheel.client.matches_file_QMARK_(f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links());
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster(url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster(url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_51207){var state_val_51208 = (state_51207[(1)]);if((state_val_51208 === (2)))
{var inst_51204 = (state_51207[(2)]);var inst_51205 = parent.removeChild(orig_link);var state_51207__$1 = (function (){var statearr_51209 = state_51207;(statearr_51209[(7)] = inst_51204);
return statearr_51209;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51207__$1,inst_51205);
} else
{if((state_val_51208 === (1)))
{var inst_51202 = cljs.core.async.timeout((200));var state_51207__$1 = state_51207;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51207__$1,(2),inst_51202);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51213 = [null,null,null,null,null,null,null,null];(statearr_51213[(0)] = state_machine__5694__auto__);
(statearr_51213[(1)] = (1));
return statearr_51213;
});
var state_machine__5694__auto____1 = (function (state_51207){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51207);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51214){if((e51214 instanceof Object))
{var ex__5697__auto__ = e51214;var statearr_51215_51217 = state_51207;(statearr_51215_51217[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51207);
return cljs.core.constant$keyword$1100;
} else
{throw e51214;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__51218 = state_51207;
state_51207 = G__51218;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51207){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_51216 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_51216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,parent))
);
return c__5708__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__51219){var map__51221 = p__51219;var map__51221__$1 = ((cljs.core.seq_QMARK_(map__51221))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51221):map__51221);var f_data = map__51221__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221__$1,cljs.core.constant$keyword$1596);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51221__$1,cljs.core.constant$keyword$1598);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__51222,files_msg){var map__51244 = p__51222;var map__51244__$1 = ((cljs.core.seq_QMARK_(map__51244))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51244):map__51244);var opts = map__51244__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,cljs.core.constant$keyword$1602);var seq__51245_51265 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1601.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__51246_51266 = null;var count__51247_51267 = (0);var i__51248_51268 = (0);while(true){
if((i__51248_51268 < count__51247_51267))
{var f_51269 = chunk__51246_51266.cljs$core$IIndexed$_nth$arity$2(null,i__51248_51268);figwheel.client.reload_css_file(f_51269);
{
var G__51270 = seq__51245_51265;
var G__51271 = chunk__51246_51266;
var G__51272 = count__51247_51267;
var G__51273 = (i__51248_51268 + (1));
seq__51245_51265 = G__51270;
chunk__51246_51266 = G__51271;
count__51247_51267 = G__51272;
i__51248_51268 = G__51273;
continue;
}
} else
{var temp__4126__auto___51274 = cljs.core.seq(seq__51245_51265);if(temp__4126__auto___51274)
{var seq__51245_51275__$1 = temp__4126__auto___51274;if(cljs.core.chunked_seq_QMARK_(seq__51245_51275__$1))
{var c__4314__auto___51276 = cljs.core.chunk_first(seq__51245_51275__$1);{
var G__51277 = cljs.core.chunk_rest(seq__51245_51275__$1);
var G__51278 = c__4314__auto___51276;
var G__51279 = cljs.core.count(c__4314__auto___51276);
var G__51280 = (0);
seq__51245_51265 = G__51277;
chunk__51246_51266 = G__51278;
count__51247_51267 = G__51279;
i__51248_51268 = G__51280;
continue;
}
} else
{var f_51281 = cljs.core.first(seq__51245_51275__$1);figwheel.client.reload_css_file(f_51281);
{
var G__51282 = cljs.core.next(seq__51245_51275__$1);
var G__51283 = null;
var G__51284 = (0);
var G__51285 = (0);
seq__51245_51265 = G__51282;
chunk__51246_51266 = G__51283;
count__51247_51267 = G__51284;
i__51248_51268 = G__51285;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__51244,map__51244__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__51244,map__51244__$1,opts,on_cssload){
return (function (state_51255){var state_val_51256 = (state_51255[(1)]);if((state_val_51256 === (2)))
{var inst_51251 = (state_51255[(2)]);var inst_51252 = cljs.core.constant$keyword$1601.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_51253 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_51252) : on_cssload.call(null,inst_51252));var state_51255__$1 = (function (){var statearr_51257 = state_51255;(statearr_51257[(7)] = inst_51251);
return statearr_51257;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_51255__$1,inst_51253);
} else
{if((state_val_51256 === (1)))
{var inst_51249 = cljs.core.async.timeout((100));var state_51255__$1 = state_51255;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51255__$1,(2),inst_51249);
} else
{return null;
}
}
});})(c__5708__auto__,map__51244,map__51244__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__51244,map__51244__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_51261 = [null,null,null,null,null,null,null,null];(statearr_51261[(0)] = state_machine__5694__auto__);
(statearr_51261[(1)] = (1));
return statearr_51261;
});
var state_machine__5694__auto____1 = (function (state_51255){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_51255);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$1100))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e51262){if((e51262 instanceof Object))
{var ex__5697__auto__ = e51262;var statearr_51263_51286 = state_51255;(statearr_51263_51286[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_51255);
return cljs.core.constant$keyword$1100;
} else
{throw e51262;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$1100))
{{
var G__51287 = state_51255;
state_51255 = G__51287;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_51255){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_51255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__51244,map__51244__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_51264 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_51264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_51264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__51244,map__51244__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1603)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1603)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster(src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__51288){var map__51293 = p__51288;var map__51293__$1 = ((cljs.core.seq_QMARK_(map__51293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51293):map__51293);var opts = map__51293__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,cljs.core.constant$keyword$1604);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,cljs.core.constant$keyword$1605);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,cljs.core.constant$keyword$1593);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51293__$1,cljs.core.constant$keyword$1606);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__51294 = cljs.core._EQ_;var expr__51295 = cljs.core.constant$keyword$1603.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__51294.cljs$core$IFn$_invoke$arity$2 ? pred__51294.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1607,expr__51295) : pred__51294.call(null,cljs.core.constant$keyword$1607,expr__51295))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__51294.cljs$core$IFn$_invoke$arity$2 ? pred__51294.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1608,expr__51295) : pred__51294.call(null,cljs.core.constant$keyword$1608,expr__51295))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__51294.cljs$core$IFn$_invoke$arity$2 ? pred__51294.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1609,expr__51295) : pred__51294.call(null,cljs.core.constant$keyword$1609,expr__51295))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1606,(retry_count - (1))));
});})(socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__51293,map__51293__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj51300 = {"detail":url};return obj51300;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1411,cljs.core.constant$keyword$1227], null)),get_essential_messages(cljs.core.constant$keyword$1610.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__51301){var map__51303 = p__51301;var map__51303__$1 = ((cljs.core.seq_QMARK_(map__51303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51303):map__51303);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51303__$1,cljs.core.constant$keyword$1227);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51303__$1,cljs.core.constant$keyword$1411);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__51304){var map__51310 = p__51304;var map__51310__$1 = ((cljs.core.seq_QMARK_(map__51310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51310):map__51310);var ed = map__51310__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,cljs.core.constant$keyword$1611);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51310__$1,cljs.core.constant$keyword$1612);console.debug("Figwheel: Compile Exception");
var seq__51311_51315 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__51312_51316 = null;var count__51313_51317 = (0);var i__51314_51318 = (0);while(true){
if((i__51314_51318 < count__51313_51317))
{var msg_51319 = chunk__51312_51316.cljs$core$IIndexed$_nth$arity$2(null,i__51314_51318);console.log(msg_51319);
{
var G__51320 = seq__51311_51315;
var G__51321 = chunk__51312_51316;
var G__51322 = count__51313_51317;
var G__51323 = (i__51314_51318 + (1));
seq__51311_51315 = G__51320;
chunk__51312_51316 = G__51321;
count__51313_51317 = G__51322;
i__51314_51318 = G__51323;
continue;
}
} else
{var temp__4126__auto___51324 = cljs.core.seq(seq__51311_51315);if(temp__4126__auto___51324)
{var seq__51311_51325__$1 = temp__4126__auto___51324;if(cljs.core.chunked_seq_QMARK_(seq__51311_51325__$1))
{var c__4314__auto___51326 = cljs.core.chunk_first(seq__51311_51325__$1);{
var G__51327 = cljs.core.chunk_rest(seq__51311_51325__$1);
var G__51328 = c__4314__auto___51326;
var G__51329 = cljs.core.count(c__4314__auto___51326);
var G__51330 = (0);
seq__51311_51315 = G__51327;
chunk__51312_51316 = G__51328;
count__51313_51317 = G__51329;
i__51314_51318 = G__51330;
continue;
}
} else
{var msg_51331 = cljs.core.first(seq__51311_51325__$1);console.log(msg_51331);
{
var G__51332 = cljs.core.next(seq__51311_51325__$1);
var G__51333 = null;
var G__51334 = (0);
var G__51335 = (0);
seq__51311_51315 = G__51332;
chunk__51312_51316 = G__51333;
count__51313_51317 = G__51334;
i__51314_51318 = G__51335;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1598,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1606,(100),cljs.core.constant$keyword$1605,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1599,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1605.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1602,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1600,figwheel.client.default_before_load,cljs.core.constant$keyword$1604,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1597,cljs.core.identity,cljs.core.constant$keyword$1593,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__51336){var map__51338 = p__51336;var map__51338__$1 = ((cljs.core.seq_QMARK_(map__51338))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51338):map__51338);var opts = map__51338__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__51336 = null;if (arguments.length > 0) {
  p__51336 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__51336);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__51339){
var p__51336 = cljs.core.seq(arglist__51339);
return watch_and_reload__delegate(p__51336);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
