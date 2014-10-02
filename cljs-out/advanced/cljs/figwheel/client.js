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
var log__delegate = function (p__45515,args){var map__45517 = p__45515;var map__45517__$1 = ((cljs.core.seq_QMARK_(map__45517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45517):map__45517);var debug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45517__$1,cljs.core.constant$keyword$1276);if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array(args));
} else
{return null;
}
};
var log = function (p__45515,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__45515,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__45518){
var p__45515 = cljs.core.first(arglist__45518);
var args = cljs.core.rest(arglist__45518);
return log__delegate(p__45515,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__45519){var map__45521 = p__45519;var map__45521__$1 = ((cljs.core.seq_QMARK_(map__45521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45521):map__45521);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45521__$1,cljs.core.constant$keyword$1277);return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__45522,callback){var map__45524 = p__45522;var map__45524__$1 = ((cljs.core.seq_QMARK_(map__45524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45524):map__45524);var msg = map__45524__$1;var dependency_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,cljs.core.constant$keyword$1278);var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,cljs.core.constant$keyword$1279);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45524__$1,cljs.core.constant$keyword$1280);if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster(request_url)).addCallback(((function (map__45524,map__45524__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__45524,map__45524__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__45525,p__45526){var map__45529 = p__45525;var map__45529__$1 = ((cljs.core.seq_QMARK_(map__45529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45529):map__45529);var opts = map__45529__$1;var url_rewriter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45529__$1,cljs.core.constant$keyword$1281);var map__45530 = p__45526;var map__45530__$1 = ((cljs.core.seq_QMARK_(map__45530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45530):map__45530);var d = map__45530__$1;var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45530__$1,cljs.core.constant$keyword$1282);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,cljs.core.constant$keyword$1280,(url_rewriter.cljs$core$IFn$_invoke$arity$1 ? url_rewriter.cljs$core$IFn$_invoke$arity$1(("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))) : url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host(opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__45531,p__45532){var map__45574 = p__45531;var map__45574__$1 = ((cljs.core.seq_QMARK_(map__45574))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45574):map__45574);var opts = map__45574__$1;var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45574__$1,cljs.core.constant$keyword$1283);var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45574__$1,cljs.core.constant$keyword$1284);var map__45575 = p__45532;var map__45575__$1 = ((cljs.core.seq_QMARK_(map__45575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45575):map__45575);var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45575__$1,cljs.core.constant$keyword$1285);var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__45574,map__45574__$1,opts,on_jsload,before_jsload,map__45575,map__45575__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__45574,map__45574__$1,opts,on_jsload,before_jsload,map__45575,map__45575__$1,files){
return (function (state_45598){var state_val_45599 = (state_45598[(1)]);if((state_val_45599 === (6)))
{var inst_45580 = (state_45598[(7)]);var inst_45589 = (state_45598[(2)]);var inst_45590 = cljs.core.PersistentVector.EMPTY_NODE;var inst_45591 = [inst_45580];var inst_45592 = (new cljs.core.PersistentVector(null,1,(5),inst_45590,inst_45591,null));var inst_45593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,inst_45592);var state_45598__$1 = (function (){var statearr_45600 = state_45598;(statearr_45600[(8)] = inst_45589);
return statearr_45600;
})();var statearr_45601_45615 = state_45598__$1;(statearr_45601_45615[(2)] = inst_45593);
(statearr_45601_45615[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_45599 === (5)))
{var inst_45596 = (state_45598[(2)]);var state_45598__$1 = state_45598;return cljs.core.async.impl.ioc_helpers.return_chan(state_45598__$1,inst_45596);
} else
{if((state_val_45599 === (4)))
{var state_45598__$1 = state_45598;var statearr_45602_45616 = state_45598__$1;(statearr_45602_45616[(2)] = null);
(statearr_45602_45616[(1)] = (5));
return cljs.core.constant$keyword$880;
} else
{if((state_val_45599 === (3)))
{var inst_45580 = (state_45598[(7)]);var inst_45583 = console.debug("Figwheel: loaded these files");var inst_45584 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1282,inst_45580);var inst_45585 = cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_45584], 0));var inst_45586 = console.log(inst_45585);var inst_45587 = cljs.core.async.timeout((10));var state_45598__$1 = (function (){var statearr_45603 = state_45598;(statearr_45603[(9)] = inst_45586);
(statearr_45603[(10)] = inst_45583);
return statearr_45603;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45598__$1,(6),inst_45587);
} else
{if((state_val_45599 === (2)))
{var inst_45580 = (state_45598[(7)]);var inst_45580__$1 = (state_45598[(2)]);var inst_45581 = cljs.core.not_empty(inst_45580__$1);var state_45598__$1 = (function (){var statearr_45604 = state_45598;(statearr_45604[(7)] = inst_45580__$1);
return statearr_45604;
})();if(cljs.core.truth_(inst_45581))
{var statearr_45605_45617 = state_45598__$1;(statearr_45605_45617[(1)] = (3));
} else
{var statearr_45606_45618 = state_45598__$1;(statearr_45606_45618[(1)] = (4));
}
return cljs.core.constant$keyword$880;
} else
{if((state_val_45599 === (1)))
{var inst_45576 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));var inst_45577 = figwheel.client.add_request_urls(opts,files);var inst_45578 = figwheel.client.load_all_js_files(inst_45577);var state_45598__$1 = (function (){var statearr_45607 = state_45598;(statearr_45607[(11)] = inst_45576);
return statearr_45607;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45598__$1,(2),inst_45578);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__45574,map__45574__$1,opts,on_jsload,before_jsload,map__45575,map__45575__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__45574,map__45574__$1,opts,on_jsload,before_jsload,map__45575,map__45575__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45611 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45611[(0)] = state_machine__5694__auto__);
(statearr_45611[(1)] = (1));
return statearr_45611;
});
var state_machine__5694__auto____1 = (function (state_45598){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45598);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45612){if((e45612 instanceof Object))
{var ex__5697__auto__ = e45612;var statearr_45613_45619 = state_45598;(statearr_45613_45619[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45598);
return cljs.core.constant$keyword$880;
} else
{throw e45612;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__45620 = state_45598;
state_45598 = G__45620;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45598){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__45574,map__45574__$1,opts,on_jsload,before_jsload,map__45575,map__45575__$1,files))
})();var state__5710__auto__ = (function (){var statearr_45614 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__45574,map__45574__$1,opts,on_jsload,before_jsload,map__45575,map__45575__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__45621,link_href){var map__45623 = p__45621;var map__45623__$1 = ((cljs.core.seq_QMARK_(map__45623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45623):map__45623);var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45623__$1,cljs.core.constant$keyword$1280);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45623__$1,cljs.core.constant$keyword$1282);var trunc_href = figwheel.client.truncate_url(link_href);return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file,trunc_href)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(figwheel.client.truncate_url(request_url),trunc_href));
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
return (function (state_45644){var state_val_45645 = (state_45644[(1)]);if((state_val_45645 === (2)))
{var inst_45641 = (state_45644[(2)]);var inst_45642 = parent.removeChild(orig_link);var state_45644__$1 = (function (){var statearr_45646 = state_45644;(statearr_45646[(7)] = inst_45641);
return statearr_45646;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_45644__$1,inst_45642);
} else
{if((state_val_45645 === (1)))
{var inst_45639 = cljs.core.async.timeout((200));var state_45644__$1 = state_45644;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45644__$1,(2),inst_45639);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45650 = [null,null,null,null,null,null,null,null];(statearr_45650[(0)] = state_machine__5694__auto__);
(statearr_45650[(1)] = (1));
return statearr_45650;
});
var state_machine__5694__auto____1 = (function (state_45644){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45644);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45651){if((e45651 instanceof Object))
{var ex__5697__auto__ = e45651;var statearr_45652_45654 = state_45644;(statearr_45652_45654[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45644);
return cljs.core.constant$keyword$880;
} else
{throw e45651;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__45655 = state_45644;
state_45644 = G__45655;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45644){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_45653 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45653;
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
figwheel.client.reload_css_file = (function reload_css_file(p__45656){var map__45658 = p__45656;var map__45658__$1 = ((cljs.core.seq_QMARK_(map__45658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45658):map__45658);var f_data = map__45658__$1;var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45658__$1,cljs.core.constant$keyword$1280);var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45658__$1,cljs.core.constant$keyword$1282);var temp__4124__auto__ = figwheel.client.get_correct_link(f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$2(link,figwheel.client.clone_link(link,request_url));
} else
{return figwheel.client.add_link_to_doc.cljs$core$IFn$_invoke$arity$1(figwheel.client.create_link(request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__45659,files_msg){var map__45681 = p__45659;var map__45681__$1 = ((cljs.core.seq_QMARK_(map__45681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45681):map__45681);var opts = map__45681__$1;var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45681__$1,cljs.core.constant$keyword$1286);var seq__45682_45702 = cljs.core.seq(figwheel.client.add_request_urls(opts,cljs.core.constant$keyword$1285.cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__45683_45703 = null;var count__45684_45704 = (0);var i__45685_45705 = (0);while(true){
if((i__45685_45705 < count__45684_45704))
{var f_45706 = chunk__45683_45703.cljs$core$IIndexed$_nth$arity$2(null,i__45685_45705);figwheel.client.reload_css_file(f_45706);
{
var G__45707 = seq__45682_45702;
var G__45708 = chunk__45683_45703;
var G__45709 = count__45684_45704;
var G__45710 = (i__45685_45705 + (1));
seq__45682_45702 = G__45707;
chunk__45683_45703 = G__45708;
count__45684_45704 = G__45709;
i__45685_45705 = G__45710;
continue;
}
} else
{var temp__4126__auto___45711 = cljs.core.seq(seq__45682_45702);if(temp__4126__auto___45711)
{var seq__45682_45712__$1 = temp__4126__auto___45711;if(cljs.core.chunked_seq_QMARK_(seq__45682_45712__$1))
{var c__4314__auto___45713 = cljs.core.chunk_first(seq__45682_45712__$1);{
var G__45714 = cljs.core.chunk_rest(seq__45682_45712__$1);
var G__45715 = c__4314__auto___45713;
var G__45716 = cljs.core.count(c__4314__auto___45713);
var G__45717 = (0);
seq__45682_45702 = G__45714;
chunk__45683_45703 = G__45715;
count__45684_45704 = G__45716;
i__45685_45705 = G__45717;
continue;
}
} else
{var f_45718 = cljs.core.first(seq__45682_45712__$1);figwheel.client.reload_css_file(f_45718);
{
var G__45719 = cljs.core.next(seq__45682_45712__$1);
var G__45720 = null;
var G__45721 = (0);
var G__45722 = (0);
seq__45682_45702 = G__45719;
chunk__45683_45703 = G__45720;
count__45684_45704 = G__45721;
i__45685_45705 = G__45722;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));cljs.core.async.impl.dispatch.run(((function (c__5708__auto__,map__45681,map__45681__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__45681,map__45681__$1,opts,on_cssload){
return (function (state_45692){var state_val_45693 = (state_45692[(1)]);if((state_val_45693 === (2)))
{var inst_45688 = (state_45692[(2)]);var inst_45689 = cljs.core.constant$keyword$1285.cljs$core$IFn$_invoke$arity$1(files_msg);var inst_45690 = (on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(inst_45689) : on_cssload.call(null,inst_45689));var state_45692__$1 = (function (){var statearr_45694 = state_45692;(statearr_45694[(7)] = inst_45688);
return statearr_45694;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_45692__$1,inst_45690);
} else
{if((state_val_45693 === (1)))
{var inst_45686 = cljs.core.async.timeout((100));var state_45692__$1 = state_45692;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45692__$1,(2),inst_45686);
} else
{return null;
}
}
});})(c__5708__auto__,map__45681,map__45681__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__45681,map__45681__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_45698 = [null,null,null,null,null,null,null,null];(statearr_45698[(0)] = state_machine__5694__auto__);
(statearr_45698[(1)] = (1));
return statearr_45698;
});
var state_machine__5694__auto____1 = (function (state_45692){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__(state_45692);if(cljs.core.keyword_identical_QMARK_(result__5696__auto__,cljs.core.constant$keyword$880))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e45699){if((e45699 instanceof Object))
{var ex__5697__auto__ = e45699;var statearr_45700_45723 = state_45692;(statearr_45700_45723[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_45692);
return cljs.core.constant$keyword$880;
} else
{throw e45699;

}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5695__auto__,cljs.core.constant$keyword$880))
{{
var G__45724 = state_45692;
state_45692 = G__45724;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_45692){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_45692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__45681,map__45681__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_45701 = (f__5709__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5709__auto__.cljs$core$IFn$_invoke$arity$0() : f__5709__auto__.call(null));(statearr_45701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_45701;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5710__auto__);
});})(c__5708__auto__,map__45681,map__45681__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return (compile_fail_callback.cljs$core$IFn$_invoke$arity$1 ? compile_fail_callback.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1287)) : compile_fail_callback.call(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(fail_msg,cljs.core.constant$keyword$1287)));
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__45725){var map__45730 = p__45725;var map__45730__$1 = ((cljs.core.seq_QMARK_(map__45730))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45730):map__45730);var opts = map__45730__$1;var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,cljs.core.constant$keyword$1288);var jsload_callback = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,cljs.core.constant$keyword$1289);var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,cljs.core.constant$keyword$1277);var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45730__$1,cljs.core.constant$keyword$1290);console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string(msg_str.data);var pred__45731 = cljs.core._EQ_;var expr__45732 = cljs.core.constant$keyword$1287.cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_((pred__45731.cljs$core$IFn$_invoke$arity$2 ? pred__45731.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1291,expr__45732) : pred__45731.call(null,cljs.core.constant$keyword$1291,expr__45732))))
{return figwheel.client.reload_js_files(opts,msg);
} else
{if(cljs.core.truth_((pred__45731.cljs$core$IFn$_invoke$arity$2 ? pred__45731.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1292,expr__45732) : pred__45731.call(null,cljs.core.constant$keyword$1292,expr__45732))))
{return figwheel.client.reload_css_files(opts,msg);
} else
{if(cljs.core.truth_((pred__45731.cljs$core$IFn$_invoke$arity$2 ? pred__45731.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1293,expr__45732) : pred__45731.call(null,cljs.core.constant$keyword$1293,expr__45732))))
{return figwheel.client.compile_failed(msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base();
return console.debug("Figwheel: socket connection established");
});})(socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket closed or failed to open"], 0));
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.constant$keyword$1290,(retry_count - (1))));
});})(socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.array_seq(["Figwheel: socket error "], 0));
});})(socket,map__45730,map__45730__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj45737 = {"detail":url};return obj45737;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1274,cljs.core.constant$keyword$923], null)),get_essential_messages(cljs.core.constant$keyword$1294.cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__45738){var map__45740 = p__45738;var map__45740__$1 = ((cljs.core.seq_QMARK_(map__45740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45740):map__45740);var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.constant$keyword$923);var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.constant$keyword$1274);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__45741){var map__45747 = p__45741;var map__45747__$1 = ((cljs.core.seq_QMARK_(map__45747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45747):map__45747);var ed = map__45747__$1;var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45747__$1,cljs.core.constant$keyword$1295);var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45747__$1,cljs.core.constant$keyword$1296);console.debug("Figwheel: Compile Exception");
var seq__45748_45752 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));var chunk__45749_45753 = null;var count__45750_45754 = (0);var i__45751_45755 = (0);while(true){
if((i__45751_45755 < count__45750_45754))
{var msg_45756 = chunk__45749_45753.cljs$core$IIndexed$_nth$arity$2(null,i__45751_45755);console.log(msg_45756);
{
var G__45757 = seq__45748_45752;
var G__45758 = chunk__45749_45753;
var G__45759 = count__45750_45754;
var G__45760 = (i__45751_45755 + (1));
seq__45748_45752 = G__45757;
chunk__45749_45753 = G__45758;
count__45750_45754 = G__45759;
i__45751_45755 = G__45760;
continue;
}
} else
{var temp__4126__auto___45761 = cljs.core.seq(seq__45748_45752);if(temp__4126__auto___45761)
{var seq__45748_45762__$1 = temp__4126__auto___45761;if(cljs.core.chunked_seq_QMARK_(seq__45748_45762__$1))
{var c__4314__auto___45763 = cljs.core.chunk_first(seq__45748_45762__$1);{
var G__45764 = cljs.core.chunk_rest(seq__45748_45762__$1);
var G__45765 = c__4314__auto___45763;
var G__45766 = cljs.core.count(c__4314__auto___45763);
var G__45767 = (0);
seq__45748_45752 = G__45764;
chunk__45749_45753 = G__45765;
count__45750_45754 = G__45766;
i__45751_45755 = G__45767;
continue;
}
} else
{var msg_45768 = cljs.core.first(seq__45748_45762__$1);console.log(msg_45768);
{
var G__45769 = cljs.core.next(seq__45748_45762__$1);
var G__45770 = null;
var G__45771 = (0);
var G__45772 = (0);
seq__45748_45752 = G__45769;
chunk__45749_45753 = G__45770;
count__45750_45754 = G__45771;
i__45751_45755 = G__45772;
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
console.log(cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1282,files)], 0)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [cljs.core.constant$keyword$1290,(100),cljs.core.constant$keyword$1289,figwheel.client.default_on_jsload,cljs.core.constant$keyword$1283,(function (){var or__3558__auto__ = cljs.core.constant$keyword$1289.cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),cljs.core.constant$keyword$1286,figwheel.client.default_on_cssload,cljs.core.constant$keyword$1284,figwheel.client.default_before_load,cljs.core.constant$keyword$1288,figwheel.client.default_on_compile_fail,cljs.core.constant$keyword$1281,cljs.core.identity,cljs.core.constant$keyword$1277,("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts], 0)));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__45773){var map__45775 = p__45773;var map__45775__$1 = ((cljs.core.seq_QMARK_(map__45775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45775):map__45775);var opts = map__45775__$1;return figwheel.client.watch_and_reload_with_opts(opts);
};
var watch_and_reload = function (var_args){
var p__45773 = null;if (arguments.length > 0) {
  p__45773 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__45773);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__45776){
var p__45773 = cljs.core.seq(arglist__45776);
return watch_and_reload__delegate(p__45773);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
