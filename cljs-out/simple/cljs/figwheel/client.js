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
var log__delegate = function (p__38726,args){var map__38728 = p__38726;var map__38728__$1 = ((cljs.core.seq_QMARK_.call(null,map__38728))?cljs.core.apply.call(null,cljs.core.hash_map,map__38728):map__38728);var debug = cljs.core.get.call(null,map__38728__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__38726,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__38726,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__38729){
var p__38726 = cljs.core.first(arglist__38729);
var args = cljs.core.rest(arglist__38729);
return log__delegate(p__38726,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__38730){var map__38732 = p__38730;var map__38732__$1 = ((cljs.core.seq_QMARK_.call(null,map__38732))?cljs.core.apply.call(null,cljs.core.hash_map,map__38732):map__38732);var websocket_url = cljs.core.get.call(null,map__38732__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__38733,callback){var map__38735 = p__38733;var map__38735__$1 = ((cljs.core.seq_QMARK_.call(null,map__38735))?cljs.core.apply.call(null,cljs.core.hash_map,map__38735):map__38735);var msg = map__38735__$1;var dependency_file = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__38735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3558__auto__ = dependency_file;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__38735,map__38735__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__38735,map__38735__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__38736,p__38737){var map__38740 = p__38736;var map__38740__$1 = ((cljs.core.seq_QMARK_.call(null,map__38740))?cljs.core.apply.call(null,cljs.core.hash_map,map__38740):map__38740);var opts = map__38740__$1;var url_rewriter = cljs.core.get.call(null,map__38740__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__38741 = p__38737;var map__38741__$1 = ((cljs.core.seq_QMARK_.call(null,map__38741))?cljs.core.apply.call(null,cljs.core.hash_map,map__38741):map__38741);var d = map__38741__$1;var file = cljs.core.get.call(null,map__38741__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__38742,p__38743){var map__38785 = p__38742;var map__38785__$1 = ((cljs.core.seq_QMARK_.call(null,map__38785))?cljs.core.apply.call(null,cljs.core.hash_map,map__38785):map__38785);var opts = map__38785__$1;var on_jsload = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__38785__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__38786 = p__38743;var map__38786__$1 = ((cljs.core.seq_QMARK_.call(null,map__38786))?cljs.core.apply.call(null,cljs.core.hash_map,map__38786):map__38786);var files = cljs.core.get.call(null,map__38786__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__38785,map__38785__$1,opts,on_jsload,before_jsload,map__38786,map__38786__$1,files){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__38785,map__38785__$1,opts,on_jsload,before_jsload,map__38786,map__38786__$1,files){
return (function (state_38809){var state_val_38810 = (state_38809[(1)]);if((state_val_38810 === (6)))
{var inst_38791 = (state_38809[(7)]);var inst_38800 = (state_38809[(2)]);var inst_38801 = cljs.core.PersistentVector.EMPTY_NODE;var inst_38802 = [inst_38791];var inst_38803 = (new cljs.core.PersistentVector(null,1,(5),inst_38801,inst_38802,null));var inst_38804 = cljs.core.apply.call(null,on_jsload,inst_38803);var state_38809__$1 = (function (){var statearr_38811 = state_38809;(statearr_38811[(8)] = inst_38800);
return statearr_38811;
})();var statearr_38812_38826 = state_38809__$1;(statearr_38812_38826[(2)] = inst_38804);
(statearr_38812_38826[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38810 === (5)))
{var inst_38807 = (state_38809[(2)]);var state_38809__$1 = state_38809;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38809__$1,inst_38807);
} else
{if((state_val_38810 === (4)))
{var state_38809__$1 = state_38809;var statearr_38813_38827 = state_38809__$1;(statearr_38813_38827[(2)] = null);
(statearr_38813_38827[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38810 === (3)))
{var inst_38791 = (state_38809[(7)]);var inst_38794 = console.debug("Figwheel: loaded these files");var inst_38795 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38791);var inst_38796 = cljs.core.prn_str.call(null,inst_38795);var inst_38797 = console.log(inst_38796);var inst_38798 = cljs.core.async.timeout.call(null,(10));var state_38809__$1 = (function (){var statearr_38814 = state_38809;(statearr_38814[(9)] = inst_38797);
(statearr_38814[(10)] = inst_38794);
return statearr_38814;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38809__$1,(6),inst_38798);
} else
{if((state_val_38810 === (2)))
{var inst_38791 = (state_38809[(7)]);var inst_38791__$1 = (state_38809[(2)]);var inst_38792 = cljs.core.not_empty.call(null,inst_38791__$1);var state_38809__$1 = (function (){var statearr_38815 = state_38809;(statearr_38815[(7)] = inst_38791__$1);
return statearr_38815;
})();if(cljs.core.truth_(inst_38792))
{var statearr_38816_38828 = state_38809__$1;(statearr_38816_38828[(1)] = (3));
} else
{var statearr_38817_38829 = state_38809__$1;(statearr_38817_38829[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_38810 === (1)))
{var inst_38787 = before_jsload.call(null,files);var inst_38788 = figwheel.client.add_request_urls.call(null,opts,files);var inst_38789 = figwheel.client.load_all_js_files.call(null,inst_38788);var state_38809__$1 = (function (){var statearr_38818 = state_38809;(statearr_38818[(11)] = inst_38787);
return statearr_38818;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38809__$1,(2),inst_38789);
} else
{return null;
}
}
}
}
}
}
});})(c__5708__auto__,map__38785,map__38785__$1,opts,on_jsload,before_jsload,map__38786,map__38786__$1,files))
;return ((function (switch__5693__auto__,c__5708__auto__,map__38785,map__38785__$1,opts,on_jsload,before_jsload,map__38786,map__38786__$1,files){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38822 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38822[(0)] = state_machine__5694__auto__);
(statearr_38822[(1)] = (1));
return statearr_38822;
});
var state_machine__5694__auto____1 = (function (state_38809){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38809);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38823){if((e38823 instanceof Object))
{var ex__5697__auto__ = e38823;var statearr_38824_38830 = state_38809;(statearr_38824_38830[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38809);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38823;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38831 = state_38809;
state_38809 = G__38831;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38809){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__38785,map__38785__$1,opts,on_jsload,before_jsload,map__38786,map__38786__$1,files))
})();var state__5710__auto__ = (function (){var statearr_38825 = f__5709__auto__.call(null);(statearr_38825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__38785,map__38785__$1,opts,on_jsload,before_jsload,map__38786,map__38786__$1,files))
);
return c__5708__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__38832,link_href){var map__38834 = p__38832;var map__38834__$1 = ((cljs.core.seq_QMARK_.call(null,map__38834))?cljs.core.apply.call(null,cljs.core.hash_map,map__38834):map__38834);var request_url = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_38855){var state_val_38856 = (state_38855[(1)]);if((state_val_38856 === (2)))
{var inst_38852 = (state_38855[(2)]);var inst_38853 = parent.removeChild(orig_link);var state_38855__$1 = (function (){var statearr_38857 = state_38855;(statearr_38857[(7)] = inst_38852);
return statearr_38857;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38855__$1,inst_38853);
} else
{if((state_val_38856 === (1)))
{var inst_38850 = cljs.core.async.timeout.call(null,(200));var state_38855__$1 = state_38855;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38855__$1,(2),inst_38850);
} else
{return null;
}
}
});})(c__5708__auto__,parent))
;return ((function (switch__5693__auto__,c__5708__auto__,parent){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38861 = [null,null,null,null,null,null,null,null];(statearr_38861[(0)] = state_machine__5694__auto__);
(statearr_38861[(1)] = (1));
return statearr_38861;
});
var state_machine__5694__auto____1 = (function (state_38855){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38855);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38862){if((e38862 instanceof Object))
{var ex__5697__auto__ = e38862;var statearr_38863_38865 = state_38855;(statearr_38863_38865[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38855);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38862;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38866 = state_38855;
state_38855 = G__38866;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38855){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,parent))
})();var state__5710__auto__ = (function (){var statearr_38864 = f__5709__auto__.call(null);(statearr_38864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38864;
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
figwheel.client.reload_css_file = (function reload_css_file(p__38867){var map__38869 = p__38867;var map__38869__$1 = ((cljs.core.seq_QMARK_.call(null,map__38869))?cljs.core.apply.call(null,cljs.core.hash_map,map__38869):map__38869);var f_data = map__38869__$1;var request_url = cljs.core.get.call(null,map__38869__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__38869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__38870,files_msg){var map__38892 = p__38870;var map__38892__$1 = ((cljs.core.seq_QMARK_.call(null,map__38892))?cljs.core.apply.call(null,cljs.core.hash_map,map__38892):map__38892);var opts = map__38892__$1;var on_cssload = cljs.core.get.call(null,map__38892__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__38893_38913 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__38894_38914 = null;var count__38895_38915 = (0);var i__38896_38916 = (0);while(true){
if((i__38896_38916 < count__38895_38915))
{var f_38917 = cljs.core._nth.call(null,chunk__38894_38914,i__38896_38916);figwheel.client.reload_css_file.call(null,f_38917);
{
var G__38918 = seq__38893_38913;
var G__38919 = chunk__38894_38914;
var G__38920 = count__38895_38915;
var G__38921 = (i__38896_38916 + (1));
seq__38893_38913 = G__38918;
chunk__38894_38914 = G__38919;
count__38895_38915 = G__38920;
i__38896_38916 = G__38921;
continue;
}
} else
{var temp__4126__auto___38922 = cljs.core.seq.call(null,seq__38893_38913);if(temp__4126__auto___38922)
{var seq__38893_38923__$1 = temp__4126__auto___38922;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38893_38923__$1))
{var c__4314__auto___38924 = cljs.core.chunk_first.call(null,seq__38893_38923__$1);{
var G__38925 = cljs.core.chunk_rest.call(null,seq__38893_38923__$1);
var G__38926 = c__4314__auto___38924;
var G__38927 = cljs.core.count.call(null,c__4314__auto___38924);
var G__38928 = (0);
seq__38893_38913 = G__38925;
chunk__38894_38914 = G__38926;
count__38895_38915 = G__38927;
i__38896_38916 = G__38928;
continue;
}
} else
{var f_38929 = cljs.core.first.call(null,seq__38893_38923__$1);figwheel.client.reload_css_file.call(null,f_38929);
{
var G__38930 = cljs.core.next.call(null,seq__38893_38923__$1);
var G__38931 = null;
var G__38932 = (0);
var G__38933 = (0);
seq__38893_38913 = G__38930;
chunk__38894_38914 = G__38931;
count__38895_38915 = G__38932;
i__38896_38916 = G__38933;
continue;
}
}
} else
{}
}
break;
}
var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,map__38892,map__38892__$1,opts,on_cssload){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,map__38892,map__38892__$1,opts,on_cssload){
return (function (state_38903){var state_val_38904 = (state_38903[(1)]);if((state_val_38904 === (2)))
{var inst_38899 = (state_38903[(2)]);var inst_38900 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_38901 = on_cssload.call(null,inst_38900);var state_38903__$1 = (function (){var statearr_38905 = state_38903;(statearr_38905[(7)] = inst_38899);
return statearr_38905;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38903__$1,inst_38901);
} else
{if((state_val_38904 === (1)))
{var inst_38897 = cljs.core.async.timeout.call(null,(100));var state_38903__$1 = state_38903;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38903__$1,(2),inst_38897);
} else
{return null;
}
}
});})(c__5708__auto__,map__38892,map__38892__$1,opts,on_cssload))
;return ((function (switch__5693__auto__,c__5708__auto__,map__38892,map__38892__$1,opts,on_cssload){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_38909 = [null,null,null,null,null,null,null,null];(statearr_38909[(0)] = state_machine__5694__auto__);
(statearr_38909[(1)] = (1));
return statearr_38909;
});
var state_machine__5694__auto____1 = (function (state_38903){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_38903);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e38910){if((e38910 instanceof Object))
{var ex__5697__auto__ = e38910;var statearr_38911_38934 = state_38903;(statearr_38911_38934[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38903);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e38910;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__38935 = state_38903;
state_38903 = G__38935;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_38903){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_38903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,map__38892,map__38892__$1,opts,on_cssload))
})();var state__5710__auto__ = (function (){var statearr_38912 = f__5709__auto__.call(null);(statearr_38912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_38912;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,map__38892,map__38892__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__38936){var map__38941 = p__38936;var map__38941__$1 = ((cljs.core.seq_QMARK_.call(null,map__38941))?cljs.core.apply.call(null,cljs.core.hash_map,map__38941):map__38941);var opts = map__38941__$1;var on_compile_fail = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__38941__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__38942 = cljs.core._EQ_;var expr__38943 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__38942.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__38943)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38942.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__38943)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__38942.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38943)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__38941,map__38941__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj38948 = {"detail":url};return obj38948;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__38949){var map__38951 = p__38949;var map__38951__$1 = ((cljs.core.seq_QMARK_.call(null,map__38951))?cljs.core.apply.call(null,cljs.core.hash_map,map__38951):map__38951);var class$ = cljs.core.get.call(null,map__38951__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__38951__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__38952){var map__38958 = p__38952;var map__38958__$1 = ((cljs.core.seq_QMARK_.call(null,map__38958))?cljs.core.apply.call(null,cljs.core.hash_map,map__38958):map__38958);var ed = map__38958__$1;var exception_data = cljs.core.get.call(null,map__38958__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__38958__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__38959_38963 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__38960_38964 = null;var count__38961_38965 = (0);var i__38962_38966 = (0);while(true){
if((i__38962_38966 < count__38961_38965))
{var msg_38967 = cljs.core._nth.call(null,chunk__38960_38964,i__38962_38966);console.log(msg_38967);
{
var G__38968 = seq__38959_38963;
var G__38969 = chunk__38960_38964;
var G__38970 = count__38961_38965;
var G__38971 = (i__38962_38966 + (1));
seq__38959_38963 = G__38968;
chunk__38960_38964 = G__38969;
count__38961_38965 = G__38970;
i__38962_38966 = G__38971;
continue;
}
} else
{var temp__4126__auto___38972 = cljs.core.seq.call(null,seq__38959_38963);if(temp__4126__auto___38972)
{var seq__38959_38973__$1 = temp__4126__auto___38972;if(cljs.core.chunked_seq_QMARK_.call(null,seq__38959_38973__$1))
{var c__4314__auto___38974 = cljs.core.chunk_first.call(null,seq__38959_38973__$1);{
var G__38975 = cljs.core.chunk_rest.call(null,seq__38959_38973__$1);
var G__38976 = c__4314__auto___38974;
var G__38977 = cljs.core.count.call(null,c__4314__auto___38974);
var G__38978 = (0);
seq__38959_38963 = G__38975;
chunk__38960_38964 = G__38976;
count__38961_38965 = G__38977;
i__38962_38966 = G__38978;
continue;
}
} else
{var msg_38979 = cljs.core.first.call(null,seq__38959_38973__$1);console.log(msg_38979);
{
var G__38980 = cljs.core.next.call(null,seq__38959_38973__$1);
var G__38981 = null;
var G__38982 = (0);
var G__38983 = (0);
seq__38959_38963 = G__38980;
chunk__38960_38964 = G__38981;
count__38961_38965 = G__38982;
i__38962_38966 = G__38983;
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
var watch_and_reload__delegate = function (p__38984){var map__38986 = p__38984;var map__38986__$1 = ((cljs.core.seq_QMARK_.call(null,map__38986))?cljs.core.apply.call(null,cljs.core.hash_map,map__38986):map__38986);var opts = map__38986__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__38984 = null;if (arguments.length > 0) {
  p__38984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__38984);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__38987){
var p__38984 = cljs.core.seq(arglist__38987);
return watch_and_reload__delegate(p__38984);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
