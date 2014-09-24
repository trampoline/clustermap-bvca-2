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
var log__delegate = function (p__31703,args){var map__31705 = p__31703;var map__31705__$1 = ((cljs.core.seq_QMARK_.call(null,map__31705))?cljs.core.apply.call(null,cljs.core.hash_map,map__31705):map__31705);var debug = cljs.core.get.call(null,map__31705__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__31703,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__31703,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31706){
var p__31703 = cljs.core.first(arglist__31706);
var args = cljs.core.rest(arglist__31706);
return log__delegate(p__31703,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__31707){var map__31709 = p__31707;var map__31709__$1 = ((cljs.core.seq_QMARK_.call(null,map__31709))?cljs.core.apply.call(null,cljs.core.hash_map,map__31709):map__31709);var websocket_url = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__31710,callback){var map__31712 = p__31710;var map__31712__$1 = ((cljs.core.seq_QMARK_.call(null,map__31712))?cljs.core.apply.call(null,cljs.core.hash_map,map__31712):map__31712);var msg = map__31712__$1;var dependency_file = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__31712,map__31712__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__31712,map__31712__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__31713,p__31714){var map__31717 = p__31713;var map__31717__$1 = ((cljs.core.seq_QMARK_.call(null,map__31717))?cljs.core.apply.call(null,cljs.core.hash_map,map__31717):map__31717);var opts = map__31717__$1;var url_rewriter = cljs.core.get.call(null,map__31717__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__31718 = p__31714;var map__31718__$1 = ((cljs.core.seq_QMARK_.call(null,map__31718))?cljs.core.apply.call(null,cljs.core.hash_map,map__31718):map__31718);var d = map__31718__$1;var file = cljs.core.get.call(null,map__31718__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__31719,p__31720){var map__31762 = p__31719;var map__31762__$1 = ((cljs.core.seq_QMARK_.call(null,map__31762))?cljs.core.apply.call(null,cljs.core.hash_map,map__31762):map__31762);var opts = map__31762__$1;var on_jsload = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__31762__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__31763 = p__31720;var map__31763__$1 = ((cljs.core.seq_QMARK_.call(null,map__31763))?cljs.core.apply.call(null,cljs.core.hash_map,map__31763):map__31763);var files = cljs.core.get.call(null,map__31763__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__31762,map__31762__$1,opts,on_jsload,before_jsload,map__31763,map__31763__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__31762,map__31762__$1,opts,on_jsload,before_jsload,map__31763,map__31763__$1,files){
return (function (state_31786){var state_val_31787 = (state_31786[(1)]);if((state_val_31787 === (6)))
{var inst_31768 = (state_31786[(7)]);var inst_31777 = (state_31786[(2)]);var inst_31778 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31779 = [inst_31768];var inst_31780 = (new cljs.core.PersistentVector(null,1,(5),inst_31778,inst_31779,null));var inst_31781 = cljs.core.apply.call(null,on_jsload,inst_31780);var state_31786__$1 = (function (){var statearr_31788 = state_31786;(statearr_31788[(8)] = inst_31777);
return statearr_31788;
})();var statearr_31789_31803 = state_31786__$1;(statearr_31789_31803[(2)] = inst_31781);
(statearr_31789_31803[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31787 === (5)))
{var inst_31784 = (state_31786[(2)]);var state_31786__$1 = state_31786;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31786__$1,inst_31784);
} else
{if((state_val_31787 === (4)))
{var state_31786__$1 = state_31786;var statearr_31790_31804 = state_31786__$1;(statearr_31790_31804[(2)] = null);
(statearr_31790_31804[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31787 === (3)))
{var inst_31768 = (state_31786[(7)]);var inst_31771 = console.debug("Figwheel: loaded these files");var inst_31772 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31768);var inst_31773 = cljs.core.prn_str.call(null,inst_31772);var inst_31774 = console.log(inst_31773);var inst_31775 = cljs.core.async.timeout.call(null,(10));var state_31786__$1 = (function (){var statearr_31791 = state_31786;(statearr_31791[(9)] = inst_31774);
(statearr_31791[(10)] = inst_31771);
return statearr_31791;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31786__$1,(6),inst_31775);
} else
{if((state_val_31787 === (2)))
{var inst_31768 = (state_31786[(7)]);var inst_31768__$1 = (state_31786[(2)]);var inst_31769 = cljs.core.not_empty.call(null,inst_31768__$1);var state_31786__$1 = (function (){var statearr_31792 = state_31786;(statearr_31792[(7)] = inst_31768__$1);
return statearr_31792;
})();if(cljs.core.truth_(inst_31769))
{var statearr_31793_31805 = state_31786__$1;(statearr_31793_31805[(1)] = (3));
} else
{var statearr_31794_31806 = state_31786__$1;(statearr_31794_31806[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31787 === (1)))
{var inst_31764 = before_jsload.call(null,files);var inst_31765 = figwheel.client.add_request_urls.call(null,opts,files);var inst_31766 = figwheel.client.load_all_js_files.call(null,inst_31765);var state_31786__$1 = (function (){var statearr_31795 = state_31786;(statearr_31795[(11)] = inst_31764);
return statearr_31795;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31786__$1,(2),inst_31766);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__31762,map__31762__$1,opts,on_jsload,before_jsload,map__31763,map__31763__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__31762,map__31762__$1,opts,on_jsload,before_jsload,map__31763,map__31763__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31799 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31799[(0)] = state_machine__5694__auto__);
(statearr_31799[(1)] = (1));
return statearr_31799;
});
var state_machine__5694__auto____1 = (function (state_31786){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31786);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31800){if((e31800 instanceof Object))
{var ex__5697__auto__ = e31800;var statearr_31801_31807 = state_31786;(statearr_31801_31807[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31786);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31800;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31808 = state_31786;
state_31786 = G__31808;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31786){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__31762,map__31762__$1,opts,on_jsload,before_jsload,map__31763,map__31763__$1,files))
})();var state__5710__auto__ = (function (){var statearr_31802 = f__5709__auto__.call(null);(statearr_31802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31802;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__31762,map__31762__$1,opts,on_jsload,before_jsload,map__31763,map__31763__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__31809,link_href){var map__31811 = p__31809;var map__31811__$1 = ((cljs.core.seq_QMARK_.call(null,map__31811))?cljs.core.apply.call(null,cljs.core.hash_map,map__31811):map__31811);var request_url = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_31832){var state_val_31833 = (state_31832[(1)]);if((state_val_31833 === (2)))
{var inst_31829 = (state_31832[(2)]);var inst_31830 = parent.removeChild(orig_link);var state_31832__$1 = (function (){var statearr_31834 = state_31832;(statearr_31834[(7)] = inst_31829);
return statearr_31834;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31832__$1,inst_31830);
} else
{if((state_val_31833 === (1)))
{var inst_31827 = cljs.core.async.timeout.call(null,(200));var state_31832__$1 = state_31832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31832__$1,(2),inst_31827);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31838 = [null,null,null,null,null,null,null,null];(statearr_31838[(0)] = state_machine__5694__auto__);
(statearr_31838[(1)] = (1));
return statearr_31838;
});
var state_machine__5694__auto____1 = (function (state_31832){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31839){if((e31839 instanceof Object))
{var ex__5697__auto__ = e31839;var statearr_31840_31842 = state_31832;(statearr_31840_31842[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31839;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31843 = state_31832;
state_31832 = G__31843;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31832){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_31841 = f__5709__auto__.call(null);(statearr_31841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31841;
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
figwheel.client.reload_css_file = (function reload_css_file(p__31844){var map__31846 = p__31844;var map__31846__$1 = ((cljs.core.seq_QMARK_.call(null,map__31846))?cljs.core.apply.call(null,cljs.core.hash_map,map__31846):map__31846);var f_data = map__31846__$1;var request_url = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__31846__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__31847,files_msg){var map__31869 = p__31847;var map__31869__$1 = ((cljs.core.seq_QMARK_.call(null,map__31869))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);var opts = map__31869__$1;var on_cssload = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__31870_31890 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__31871_31891 = null;var count__31872_31892 = (0);var i__31873_31893 = (0);while(true){
if((i__31873_31893 < count__31872_31892))
{var f_31894 = cljs.core._nth.call(null,chunk__31871_31891,i__31873_31893);figwheel.client.reload_css_file.call(null,f_31894);
{
var G__31895 = seq__31870_31890;
var G__31896 = chunk__31871_31891;
var G__31897 = count__31872_31892;
var G__31898 = (i__31873_31893 + (1));
seq__31870_31890 = G__31895;
chunk__31871_31891 = G__31896;
count__31872_31892 = G__31897;
i__31873_31893 = G__31898;
continue;
}
} else
{var temp__4126__auto___31899 = cljs.core.seq.call(null,seq__31870_31890);if(temp__4126__auto___31899)
{var seq__31870_31900__$1 = temp__4126__auto___31899;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31870_31900__$1))
{var c__4314__auto___31901 = cljs.core.chunk_first.call(null,seq__31870_31900__$1);{
var G__31902 = cljs.core.chunk_rest.call(null,seq__31870_31900__$1);
var G__31903 = c__4314__auto___31901;
var G__31904 = cljs.core.count.call(null,c__4314__auto___31901);
var G__31905 = (0);
seq__31870_31890 = G__31902;
chunk__31871_31891 = G__31903;
count__31872_31892 = G__31904;
i__31873_31893 = G__31905;
continue;
}
} else
{var f_31906 = cljs.core.first.call(null,seq__31870_31900__$1);figwheel.client.reload_css_file.call(null,f_31906);
{
var G__31907 = cljs.core.next.call(null,seq__31870_31900__$1);
var G__31908 = null;
var G__31909 = (0);
var G__31910 = (0);
seq__31870_31890 = G__31907;
chunk__31871_31891 = G__31908;
count__31872_31892 = G__31909;
i__31873_31893 = G__31910;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__31869,map__31869__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__31869,map__31869__$1,opts,on_cssload){
return (function (state_31880){var state_val_31881 = (state_31880[(1)]);if((state_val_31881 === (2)))
{var inst_31876 = (state_31880[(2)]);var inst_31877 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_31878 = on_cssload.call(null,inst_31877);var state_31880__$1 = (function (){var statearr_31882 = state_31880;(statearr_31882[(7)] = inst_31876);
return statearr_31882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31880__$1,inst_31878);
} else
{if((state_val_31881 === (1)))
{var inst_31874 = cljs.core.async.timeout.call(null,(100));var state_31880__$1 = state_31880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31880__$1,(2),inst_31874);
} else
{return null;
}
}
});})(c__5708__auto__,map__31869,map__31869__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__31869,map__31869__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_31886 = [null,null,null,null,null,null,null,null];(statearr_31886[(0)] = state_machine__5694__auto__);
(statearr_31886[(1)] = (1));
return statearr_31886;
});
var state_machine__5694__auto____1 = (function (state_31880){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_31880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e31887){if((e31887 instanceof Object))
{var ex__5697__auto__ = e31887;var statearr_31888_31911 = state_31880;(statearr_31888_31911[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31887;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31912 = state_31880;
state_31880 = G__31912;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__31869,map__31869__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_31889 = f__5709__auto__.call(null);(statearr_31889[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_31889;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__31869,map__31869__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__31913){var map__31918 = p__31913;var map__31918__$1 = ((cljs.core.seq_QMARK_.call(null,map__31918))?cljs.core.apply.call(null,cljs.core.hash_map,map__31918):map__31918);var opts = map__31918__$1;var on_compile_fail = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__31918__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__31919 = cljs.core._EQ_;var expr__31920 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__31919.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__31920)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31919.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__31920)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__31919.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31920)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31918,map__31918__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31925 = {"detail":url};return obj31925;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31926){var map__31928 = p__31926;var map__31928__$1 = ((cljs.core.seq_QMARK_.call(null,map__31928))?cljs.core.apply.call(null,cljs.core.hash_map,map__31928):map__31928);var class$ = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__31928__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31929){var map__31935 = p__31929;var map__31935__$1 = ((cljs.core.seq_QMARK_.call(null,map__31935))?cljs.core.apply.call(null,cljs.core.hash_map,map__31935):map__31935);var ed = map__31935__$1;var exception_data = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__31935__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__31936_31940 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__31937_31941 = null;var count__31938_31942 = (0);var i__31939_31943 = (0);while(true){
if((i__31939_31943 < count__31938_31942))
{var msg_31944 = cljs.core._nth.call(null,chunk__31937_31941,i__31939_31943);console.log(msg_31944);
{
var G__31945 = seq__31936_31940;
var G__31946 = chunk__31937_31941;
var G__31947 = count__31938_31942;
var G__31948 = (i__31939_31943 + (1));
seq__31936_31940 = G__31945;
chunk__31937_31941 = G__31946;
count__31938_31942 = G__31947;
i__31939_31943 = G__31948;
continue;
}
} else
{var temp__4126__auto___31949 = cljs.core.seq.call(null,seq__31936_31940);if(temp__4126__auto___31949)
{var seq__31936_31950__$1 = temp__4126__auto___31949;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31936_31950__$1))
{var c__4314__auto___31951 = cljs.core.chunk_first.call(null,seq__31936_31950__$1);{
var G__31952 = cljs.core.chunk_rest.call(null,seq__31936_31950__$1);
var G__31953 = c__4314__auto___31951;
var G__31954 = cljs.core.count.call(null,c__4314__auto___31951);
var G__31955 = (0);
seq__31936_31940 = G__31952;
chunk__31937_31941 = G__31953;
count__31938_31942 = G__31954;
i__31939_31943 = G__31955;
continue;
}
} else
{var msg_31956 = cljs.core.first.call(null,seq__31936_31950__$1);console.log(msg_31956);
{
var G__31957 = cljs.core.next.call(null,seq__31936_31950__$1);
var G__31958 = null;
var G__31959 = (0);
var G__31960 = (0);
seq__31936_31940 = G__31957;
chunk__31937_31941 = G__31958;
count__31938_31942 = G__31959;
i__31939_31943 = G__31960;
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
var watch_and_reload__delegate = function (p__31961){var map__31963 = p__31961;var map__31963__$1 = ((cljs.core.seq_QMARK_.call(null,map__31963))?cljs.core.apply.call(null,cljs.core.hash_map,map__31963):map__31963);var opts = map__31963__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31961 = null;if (arguments.length > 0) {
  p__31961 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__31961);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31964){
var p__31961 = cljs.core.seq(arglist__31964);
return watch_and_reload__delegate(p__31961);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
