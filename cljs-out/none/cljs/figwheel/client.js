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
var log__delegate = function (p__68559,args){var map__68561 = p__68559;var map__68561__$1 = ((cljs.core.seq_QMARK_.call(null,map__68561))?cljs.core.apply.call(null,cljs.core.hash_map,map__68561):map__68561);var debug = cljs.core.get.call(null,map__68561__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__68559,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__68559,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__68562){
var p__68559 = cljs.core.first(arglist__68562);
var args = cljs.core.rest(arglist__68562);
return log__delegate(p__68559,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__68563){var map__68565 = p__68563;var map__68565__$1 = ((cljs.core.seq_QMARK_.call(null,map__68565))?cljs.core.apply.call(null,cljs.core.hash_map,map__68565):map__68565);var websocket_url = cljs.core.get.call(null,map__68565__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__68566,callback){var map__68568 = p__68566;var map__68568__$1 = ((cljs.core.seq_QMARK_.call(null,map__68568))?cljs.core.apply.call(null,cljs.core.hash_map,map__68568):map__68568);var msg = map__68568__$1;var dependency_file = cljs.core.get.call(null,map__68568__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__68568__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__68568__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__68568,map__68568__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__68568,map__68568__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__68569,p__68570){var map__68573 = p__68569;var map__68573__$1 = ((cljs.core.seq_QMARK_.call(null,map__68573))?cljs.core.apply.call(null,cljs.core.hash_map,map__68573):map__68573);var opts = map__68573__$1;var url_rewriter = cljs.core.get.call(null,map__68573__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__68574 = p__68570;var map__68574__$1 = ((cljs.core.seq_QMARK_.call(null,map__68574))?cljs.core.apply.call(null,cljs.core.hash_map,map__68574):map__68574);var d = map__68574__$1;var file = cljs.core.get.call(null,map__68574__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__68575,p__68576){var map__68618 = p__68575;var map__68618__$1 = ((cljs.core.seq_QMARK_.call(null,map__68618))?cljs.core.apply.call(null,cljs.core.hash_map,map__68618):map__68618);var opts = map__68618__$1;var on_jsload = cljs.core.get.call(null,map__68618__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__68618__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__68619 = p__68576;var map__68619__$1 = ((cljs.core.seq_QMARK_.call(null,map__68619))?cljs.core.apply.call(null,cljs.core.hash_map,map__68619):map__68619);var files = cljs.core.get.call(null,map__68619__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__68618,map__68618__$1,opts,on_jsload,before_jsload,map__68619,map__68619__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__68618,map__68618__$1,opts,on_jsload,before_jsload,map__68619,map__68619__$1,files){
return (function (state_68642){var state_val_68643 = (state_68642[(1)]);if((state_val_68643 === (6)))
{var inst_68624 = (state_68642[(7)]);var inst_68633 = (state_68642[(2)]);var inst_68634 = cljs.core.PersistentVector.EMPTY_NODE;var inst_68635 = [inst_68624];var inst_68636 = (new cljs.core.PersistentVector(null,1,(5),inst_68634,inst_68635,null));var inst_68637 = cljs.core.apply.call(null,on_jsload,inst_68636);var state_68642__$1 = (function (){var statearr_68644 = state_68642;(statearr_68644[(8)] = inst_68633);
return statearr_68644;
})();var statearr_68645_68659 = state_68642__$1;(statearr_68645_68659[(2)] = inst_68637);
(statearr_68645_68659[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (5)))
{var inst_68640 = (state_68642[(2)]);var state_68642__$1 = state_68642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68642__$1,inst_68640);
} else
{if((state_val_68643 === (4)))
{var state_68642__$1 = state_68642;var statearr_68646_68660 = state_68642__$1;(statearr_68646_68660[(2)] = null);
(statearr_68646_68660[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (3)))
{var inst_68624 = (state_68642[(7)]);var inst_68627 = console.debug("Figwheel: loaded these files");var inst_68628 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_68624);var inst_68629 = cljs.core.prn_str.call(null,inst_68628);var inst_68630 = console.log(inst_68629);var inst_68631 = cljs.core.async.timeout.call(null,(10));var state_68642__$1 = (function (){var statearr_68647 = state_68642;(statearr_68647[(9)] = inst_68630);
(statearr_68647[(10)] = inst_68627);
return statearr_68647;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68642__$1,(6),inst_68631);
} else
{if((state_val_68643 === (2)))
{var inst_68624 = (state_68642[(7)]);var inst_68624__$1 = (state_68642[(2)]);var inst_68625 = cljs.core.not_empty.call(null,inst_68624__$1);var state_68642__$1 = (function (){var statearr_68648 = state_68642;(statearr_68648[(7)] = inst_68624__$1);
return statearr_68648;
})();if(cljs.core.truth_(inst_68625))
{var statearr_68649_68661 = state_68642__$1;(statearr_68649_68661[(1)] = (3));
} else
{var statearr_68650_68662 = state_68642__$1;(statearr_68650_68662[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_68643 === (1)))
{var inst_68620 = before_jsload.call(null,files);var inst_68621 = figwheel.client.add_request_urls.call(null,opts,files);var inst_68622 = figwheel.client.load_all_js_files.call(null,inst_68621);var state_68642__$1 = (function (){var statearr_68651 = state_68642;(statearr_68651[(11)] = inst_68620);
return statearr_68651;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68642__$1,(2),inst_68622);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__68618,map__68618__$1,opts,on_jsload,before_jsload,map__68619,map__68619__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__68618,map__68618__$1,opts,on_jsload,before_jsload,map__68619,map__68619__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_68655 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_68655[(0)] = state_machine__5694__auto__);
(statearr_68655[(1)] = (1));
return statearr_68655;
});
var state_machine__5694__auto____1 = (function (state_68642){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_68642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e68656){if((e68656 instanceof Object))
{var ex__5697__auto__ = e68656;var statearr_68657_68663 = state_68642;(statearr_68657_68663[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68656;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68664 = state_68642;
state_68642 = G__68664;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_68642){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_68642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__68618,map__68618__$1,opts,on_jsload,before_jsload,map__68619,map__68619__$1,files))
})();var state__5710__auto__ = (function (){var statearr_68658 = f__5709__auto__.call(null);(statearr_68658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_68658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__68618,map__68618__$1,opts,on_jsload,before_jsload,map__68619,map__68619__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__68665,link_href){var map__68667 = p__68665;var map__68667__$1 = ((cljs.core.seq_QMARK_.call(null,map__68667))?cljs.core.apply.call(null,cljs.core.hash_map,map__68667):map__68667);var request_url = cljs.core.get.call(null,map__68667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__68667__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,parent){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,parent){
return (function (state_68688){var state_val_68689 = (state_68688[(1)]);if((state_val_68689 === (2)))
{var inst_68685 = (state_68688[(2)]);var inst_68686 = parent.removeChild(orig_link);var state_68688__$1 = (function (){var statearr_68690 = state_68688;(statearr_68690[(7)] = inst_68685);
return statearr_68690;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68688__$1,inst_68686);
} else
{if((state_val_68689 === (1)))
{var inst_68683 = cljs.core.async.timeout.call(null,(200));var state_68688__$1 = state_68688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68688__$1,(2),inst_68683);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_68694 = [null,null,null,null,null,null,null,null];(statearr_68694[(0)] = state_machine__5694__auto__);
(statearr_68694[(1)] = (1));
return statearr_68694;
});
var state_machine__5694__auto____1 = (function (state_68688){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_68688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e68695){if((e68695 instanceof Object))
{var ex__5697__auto__ = e68695;var statearr_68696_68698 = state_68688;(statearr_68696_68698[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68695;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68699 = state_68688;
state_68688 = G__68699;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_68688){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_68688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_68697 = f__5709__auto__.call(null);(statearr_68697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_68697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
figwheel.client.reload_css_file = (function reload_css_file(p__68700){var map__68702 = p__68700;var map__68702__$1 = ((cljs.core.seq_QMARK_.call(null,map__68702))?cljs.core.apply.call(null,cljs.core.hash_map,map__68702):map__68702);var f_data = map__68702__$1;var request_url = cljs.core.get.call(null,map__68702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__68702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__68703,files_msg){var map__68725 = p__68703;var map__68725__$1 = ((cljs.core.seq_QMARK_.call(null,map__68725))?cljs.core.apply.call(null,cljs.core.hash_map,map__68725):map__68725);var opts = map__68725__$1;var on_cssload = cljs.core.get.call(null,map__68725__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__68726_68746 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__68727_68747 = null;var count__68728_68748 = (0);var i__68729_68749 = (0);while(true){
if((i__68729_68749 < count__68728_68748))
{var f_68750 = cljs.core._nth.call(null,chunk__68727_68747,i__68729_68749);figwheel.client.reload_css_file.call(null,f_68750);
{
var G__68751 = seq__68726_68746;
var G__68752 = chunk__68727_68747;
var G__68753 = count__68728_68748;
var G__68754 = (i__68729_68749 + (1));
seq__68726_68746 = G__68751;
chunk__68727_68747 = G__68752;
count__68728_68748 = G__68753;
i__68729_68749 = G__68754;
continue;
}
} else
{var temp__4126__auto___68755 = cljs.core.seq.call(null,seq__68726_68746);if(temp__4126__auto___68755)
{var seq__68726_68756__$1 = temp__4126__auto___68755;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68726_68756__$1))
{var c__4314__auto___68757 = cljs.core.chunk_first.call(null,seq__68726_68756__$1);{
var G__68758 = cljs.core.chunk_rest.call(null,seq__68726_68756__$1);
var G__68759 = c__4314__auto___68757;
var G__68760 = cljs.core.count.call(null,c__4314__auto___68757);
var G__68761 = (0);
seq__68726_68746 = G__68758;
chunk__68727_68747 = G__68759;
count__68728_68748 = G__68760;
i__68729_68749 = G__68761;
continue;
}
} else
{var f_68762 = cljs.core.first.call(null,seq__68726_68756__$1);figwheel.client.reload_css_file.call(null,f_68762);
{
var G__68763 = cljs.core.next.call(null,seq__68726_68756__$1);
var G__68764 = null;
var G__68765 = (0);
var G__68766 = (0);
seq__68726_68746 = G__68763;
chunk__68727_68747 = G__68764;
count__68728_68748 = G__68765;
i__68729_68749 = G__68766;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__68725,map__68725__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__68725,map__68725__$1,opts,on_cssload){
return (function (state_68736){var state_val_68737 = (state_68736[(1)]);if((state_val_68737 === (2)))
{var inst_68732 = (state_68736[(2)]);var inst_68733 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_68734 = on_cssload.call(null,inst_68733);var state_68736__$1 = (function (){var statearr_68738 = state_68736;(statearr_68738[(7)] = inst_68732);
return statearr_68738;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68736__$1,inst_68734);
} else
{if((state_val_68737 === (1)))
{var inst_68730 = cljs.core.async.timeout.call(null,(100));var state_68736__$1 = state_68736;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68736__$1,(2),inst_68730);
} else
{return null;
}
}
});})(c__5708__auto__,map__68725,map__68725__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__68725,map__68725__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_68742 = [null,null,null,null,null,null,null,null];(statearr_68742[(0)] = state_machine__5694__auto__);
(statearr_68742[(1)] = (1));
return statearr_68742;
});
var state_machine__5694__auto____1 = (function (state_68736){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_68736);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e68743){if((e68743 instanceof Object))
{var ex__5697__auto__ = e68743;var statearr_68744_68767 = state_68736;(statearr_68744_68767[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68736);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e68743;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__68768 = state_68736;
state_68736 = G__68768;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_68736){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_68736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__68725,map__68725__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_68745 = f__5709__auto__.call(null);(statearr_68745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_68745;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__68725,map__68725__$1,opts,on_cssload))
);
return c__5708__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__68769){var map__68774 = p__68769;var map__68774__$1 = ((cljs.core.seq_QMARK_.call(null,map__68774))?cljs.core.apply.call(null,cljs.core.hash_map,map__68774):map__68774);var opts = map__68774__$1;var on_compile_fail = cljs.core.get.call(null,map__68774__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__68774__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__68774__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__68774__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__68775 = cljs.core._EQ_;var expr__68776 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__68775.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__68776)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__68775.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__68776)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__68775.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__68776)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__68774,map__68774__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj68781 = {"detail":url};return obj68781;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__68782){var map__68784 = p__68782;var map__68784__$1 = ((cljs.core.seq_QMARK_.call(null,map__68784))?cljs.core.apply.call(null,cljs.core.hash_map,map__68784):map__68784);var class$ = cljs.core.get.call(null,map__68784__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__68784__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__68785){var map__68791 = p__68785;var map__68791__$1 = ((cljs.core.seq_QMARK_.call(null,map__68791))?cljs.core.apply.call(null,cljs.core.hash_map,map__68791):map__68791);var ed = map__68791__$1;var exception_data = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__68791__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__68792_68796 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__68793_68797 = null;var count__68794_68798 = (0);var i__68795_68799 = (0);while(true){
if((i__68795_68799 < count__68794_68798))
{var msg_68800 = cljs.core._nth.call(null,chunk__68793_68797,i__68795_68799);console.log(msg_68800);
{
var G__68801 = seq__68792_68796;
var G__68802 = chunk__68793_68797;
var G__68803 = count__68794_68798;
var G__68804 = (i__68795_68799 + (1));
seq__68792_68796 = G__68801;
chunk__68793_68797 = G__68802;
count__68794_68798 = G__68803;
i__68795_68799 = G__68804;
continue;
}
} else
{var temp__4126__auto___68805 = cljs.core.seq.call(null,seq__68792_68796);if(temp__4126__auto___68805)
{var seq__68792_68806__$1 = temp__4126__auto___68805;if(cljs.core.chunked_seq_QMARK_.call(null,seq__68792_68806__$1))
{var c__4314__auto___68807 = cljs.core.chunk_first.call(null,seq__68792_68806__$1);{
var G__68808 = cljs.core.chunk_rest.call(null,seq__68792_68806__$1);
var G__68809 = c__4314__auto___68807;
var G__68810 = cljs.core.count.call(null,c__4314__auto___68807);
var G__68811 = (0);
seq__68792_68796 = G__68808;
chunk__68793_68797 = G__68809;
count__68794_68798 = G__68810;
i__68795_68799 = G__68811;
continue;
}
} else
{var msg_68812 = cljs.core.first.call(null,seq__68792_68806__$1);console.log(msg_68812);
{
var G__68813 = cljs.core.next.call(null,seq__68792_68806__$1);
var G__68814 = null;
var G__68815 = (0);
var G__68816 = (0);
seq__68792_68796 = G__68813;
chunk__68793_68797 = G__68814;
count__68794_68798 = G__68815;
i__68795_68799 = G__68816;
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
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__68817){var map__68819 = p__68817;var map__68819__$1 = ((cljs.core.seq_QMARK_.call(null,map__68819))?cljs.core.apply.call(null,cljs.core.hash_map,map__68819):map__68819);var opts = map__68819__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__68817 = null;if (arguments.length > 0) {
  p__68817 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__68817);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__68820){
var p__68817 = cljs.core.seq(arglist__68820);
return watch_and_reload__delegate(p__68817);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map