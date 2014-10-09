// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_33217 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_33218 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_33219 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_33219,opt_wrapper_33217,table_section_wrapper_33218,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_33217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_33218,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_33218,cell_wrapper_33219,table_section_wrapper_33218,table_section_wrapper_33218]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__33224 = cljs.core.seq.call(null,tbody);var chunk__33225 = null;var count__33226 = (0);var i__33227 = (0);while(true){
if((i__33227 < count__33226))
{var child = cljs.core._nth.call(null,chunk__33225,i__33227);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33228 = seq__33224;
var G__33229 = chunk__33225;
var G__33230 = count__33226;
var G__33231 = (i__33227 + (1));
seq__33224 = G__33228;
chunk__33225 = G__33229;
count__33226 = G__33230;
i__33227 = G__33231;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__33224);if(temp__4126__auto__)
{var seq__33224__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33224__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__33224__$1);{
var G__33232 = cljs.core.chunk_rest.call(null,seq__33224__$1);
var G__33233 = c__4314__auto__;
var G__33234 = cljs.core.count.call(null,c__4314__auto__);
var G__33235 = (0);
seq__33224 = G__33232;
chunk__33225 = G__33233;
count__33226 = G__33234;
i__33227 = G__33235;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__33224__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33236 = cljs.core.next.call(null,seq__33224__$1);
var G__33237 = null;
var G__33238 = (0);
var G__33239 = (0);
seq__33224 = G__33236;
chunk__33225 = G__33237;
count__33226 = G__33238;
i__33227 = G__33239;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__33241 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__33241,(0),null);var start_wrap = cljs.core.nth.call(null,vec__33241,(1),null);var end_wrap = cljs.core.nth.call(null,vec__33241,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__33242 = wrapper.lastChild;
var G__33243 = (level - (1));
wrapper = G__33242;
level = G__33243;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj33245 = {};return obj33245;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__33246){
var mesg = cljs.core.seq(arglist__33246);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__33247){
var mesg = cljs.core.seq(arglist__33247);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__33248){
var contents = cljs.core.seq(arglist__33248);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__33249_SHARP_){return p1__33249_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__33250_SHARP_,p2__33251_SHARP_){return goog.dom.insertChildAt(p1__33250_SHARP_,p2__33251_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33253_SHARP_,p2__33252_SHARP_){return goog.dom.insertSiblingBefore(p2__33252_SHARP_,p1__33253_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33255_SHARP_,p2__33254_SHARP_){return goog.dom.insertSiblingAfter(p2__33254_SHARP_,p1__33255_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__33257_SHARP_,p2__33256_SHARP_){return goog.dom.replaceNode(p2__33256_SHARP_,p1__33257_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__33262_33266 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33263_33267 = null;var count__33264_33268 = (0);var i__33265_33269 = (0);while(true){
if((i__33265_33269 < count__33264_33268))
{var n_33270 = cljs.core._nth.call(null,chunk__33263_33267,i__33265_33269);goog.style.setStyle(n_33270,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33271 = seq__33262_33266;
var G__33272 = chunk__33263_33267;
var G__33273 = count__33264_33268;
var G__33274 = (i__33265_33269 + (1));
seq__33262_33266 = G__33271;
chunk__33263_33267 = G__33272;
count__33264_33268 = G__33273;
i__33265_33269 = G__33274;
continue;
}
} else
{var temp__4126__auto___33275 = cljs.core.seq.call(null,seq__33262_33266);if(temp__4126__auto___33275)
{var seq__33262_33276__$1 = temp__4126__auto___33275;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33262_33276__$1))
{var c__4314__auto___33277 = cljs.core.chunk_first.call(null,seq__33262_33276__$1);{
var G__33278 = cljs.core.chunk_rest.call(null,seq__33262_33276__$1);
var G__33279 = c__4314__auto___33277;
var G__33280 = cljs.core.count.call(null,c__4314__auto___33277);
var G__33281 = (0);
seq__33262_33266 = G__33278;
chunk__33263_33267 = G__33279;
count__33264_33268 = G__33280;
i__33265_33269 = G__33281;
continue;
}
} else
{var n_33282 = cljs.core.first.call(null,seq__33262_33276__$1);goog.style.setStyle(n_33282,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33283 = cljs.core.next.call(null,seq__33262_33276__$1);
var G__33284 = null;
var G__33285 = (0);
var G__33286 = (0);
seq__33262_33266 = G__33283;
chunk__33263_33267 = G__33284;
count__33264_33268 = G__33285;
i__33265_33269 = G__33286;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33287){
var content = cljs.core.first(arglist__33287);
arglist__33287 = cljs.core.next(arglist__33287);
var name = cljs.core.first(arglist__33287);
var value = cljs.core.rest(arglist__33287);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__33292_33296 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33293_33297 = null;var count__33294_33298 = (0);var i__33295_33299 = (0);while(true){
if((i__33295_33299 < count__33294_33298))
{var n_33300 = cljs.core._nth.call(null,chunk__33293_33297,i__33295_33299);n_33300.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33301 = seq__33292_33296;
var G__33302 = chunk__33293_33297;
var G__33303 = count__33294_33298;
var G__33304 = (i__33295_33299 + (1));
seq__33292_33296 = G__33301;
chunk__33293_33297 = G__33302;
count__33294_33298 = G__33303;
i__33295_33299 = G__33304;
continue;
}
} else
{var temp__4126__auto___33305 = cljs.core.seq.call(null,seq__33292_33296);if(temp__4126__auto___33305)
{var seq__33292_33306__$1 = temp__4126__auto___33305;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33292_33306__$1))
{var c__4314__auto___33307 = cljs.core.chunk_first.call(null,seq__33292_33306__$1);{
var G__33308 = cljs.core.chunk_rest.call(null,seq__33292_33306__$1);
var G__33309 = c__4314__auto___33307;
var G__33310 = cljs.core.count.call(null,c__4314__auto___33307);
var G__33311 = (0);
seq__33292_33296 = G__33308;
chunk__33293_33297 = G__33309;
count__33294_33298 = G__33310;
i__33295_33299 = G__33311;
continue;
}
} else
{var n_33312 = cljs.core.first.call(null,seq__33292_33306__$1);n_33312.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33313 = cljs.core.next.call(null,seq__33292_33306__$1);
var G__33314 = null;
var G__33315 = (0);
var G__33316 = (0);
seq__33292_33296 = G__33313;
chunk__33293_33297 = G__33314;
count__33294_33298 = G__33315;
i__33295_33299 = G__33316;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33317){
var content = cljs.core.first(arglist__33317);
arglist__33317 = cljs.core.next(arglist__33317);
var name = cljs.core.first(arglist__33317);
var value = cljs.core.rest(arglist__33317);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33322_33326 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33323_33327 = null;var count__33324_33328 = (0);var i__33325_33329 = (0);while(true){
if((i__33325_33329 < count__33324_33328))
{var n_33330 = cljs.core._nth.call(null,chunk__33323_33327,i__33325_33329);n_33330.removeAttribute(cljs.core.name.call(null,name));
{
var G__33331 = seq__33322_33326;
var G__33332 = chunk__33323_33327;
var G__33333 = count__33324_33328;
var G__33334 = (i__33325_33329 + (1));
seq__33322_33326 = G__33331;
chunk__33323_33327 = G__33332;
count__33324_33328 = G__33333;
i__33325_33329 = G__33334;
continue;
}
} else
{var temp__4126__auto___33335 = cljs.core.seq.call(null,seq__33322_33326);if(temp__4126__auto___33335)
{var seq__33322_33336__$1 = temp__4126__auto___33335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33322_33336__$1))
{var c__4314__auto___33337 = cljs.core.chunk_first.call(null,seq__33322_33336__$1);{
var G__33338 = cljs.core.chunk_rest.call(null,seq__33322_33336__$1);
var G__33339 = c__4314__auto___33337;
var G__33340 = cljs.core.count.call(null,c__4314__auto___33337);
var G__33341 = (0);
seq__33322_33326 = G__33338;
chunk__33323_33327 = G__33339;
count__33324_33328 = G__33340;
i__33325_33329 = G__33341;
continue;
}
} else
{var n_33342 = cljs.core.first.call(null,seq__33322_33336__$1);n_33342.removeAttribute(cljs.core.name.call(null,name));
{
var G__33343 = cljs.core.next.call(null,seq__33322_33336__$1);
var G__33344 = null;
var G__33345 = (0);
var G__33346 = (0);
seq__33322_33326 = G__33343;
chunk__33323_33327 = G__33344;
count__33324_33328 = G__33345;
i__33325_33329 = G__33346;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33348 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33348,(0),null);var v = cljs.core.nth.call(null,vec__33348,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__33349_SHARP_){var attr = attrs__$1.item(p1__33349_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33356_33362 = cljs.core.seq.call(null,styles);var chunk__33357_33363 = null;var count__33358_33364 = (0);var i__33359_33365 = (0);while(true){
if((i__33359_33365 < count__33358_33364))
{var vec__33360_33366 = cljs.core._nth.call(null,chunk__33357_33363,i__33359_33365);var name_33367 = cljs.core.nth.call(null,vec__33360_33366,(0),null);var value_33368 = cljs.core.nth.call(null,vec__33360_33366,(1),null);domina.set_style_BANG_.call(null,content,name_33367,value_33368);
{
var G__33369 = seq__33356_33362;
var G__33370 = chunk__33357_33363;
var G__33371 = count__33358_33364;
var G__33372 = (i__33359_33365 + (1));
seq__33356_33362 = G__33369;
chunk__33357_33363 = G__33370;
count__33358_33364 = G__33371;
i__33359_33365 = G__33372;
continue;
}
} else
{var temp__4126__auto___33373 = cljs.core.seq.call(null,seq__33356_33362);if(temp__4126__auto___33373)
{var seq__33356_33374__$1 = temp__4126__auto___33373;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33356_33374__$1))
{var c__4314__auto___33375 = cljs.core.chunk_first.call(null,seq__33356_33374__$1);{
var G__33376 = cljs.core.chunk_rest.call(null,seq__33356_33374__$1);
var G__33377 = c__4314__auto___33375;
var G__33378 = cljs.core.count.call(null,c__4314__auto___33375);
var G__33379 = (0);
seq__33356_33362 = G__33376;
chunk__33357_33363 = G__33377;
count__33358_33364 = G__33378;
i__33359_33365 = G__33379;
continue;
}
} else
{var vec__33361_33380 = cljs.core.first.call(null,seq__33356_33374__$1);var name_33381 = cljs.core.nth.call(null,vec__33361_33380,(0),null);var value_33382 = cljs.core.nth.call(null,vec__33361_33380,(1),null);domina.set_style_BANG_.call(null,content,name_33381,value_33382);
{
var G__33383 = cljs.core.next.call(null,seq__33356_33374__$1);
var G__33384 = null;
var G__33385 = (0);
var G__33386 = (0);
seq__33356_33362 = G__33383;
chunk__33357_33363 = G__33384;
count__33358_33364 = G__33385;
i__33359_33365 = G__33386;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33393_33399 = cljs.core.seq.call(null,attrs);var chunk__33394_33400 = null;var count__33395_33401 = (0);var i__33396_33402 = (0);while(true){
if((i__33396_33402 < count__33395_33401))
{var vec__33397_33403 = cljs.core._nth.call(null,chunk__33394_33400,i__33396_33402);var name_33404 = cljs.core.nth.call(null,vec__33397_33403,(0),null);var value_33405 = cljs.core.nth.call(null,vec__33397_33403,(1),null);domina.set_attr_BANG_.call(null,content,name_33404,value_33405);
{
var G__33406 = seq__33393_33399;
var G__33407 = chunk__33394_33400;
var G__33408 = count__33395_33401;
var G__33409 = (i__33396_33402 + (1));
seq__33393_33399 = G__33406;
chunk__33394_33400 = G__33407;
count__33395_33401 = G__33408;
i__33396_33402 = G__33409;
continue;
}
} else
{var temp__4126__auto___33410 = cljs.core.seq.call(null,seq__33393_33399);if(temp__4126__auto___33410)
{var seq__33393_33411__$1 = temp__4126__auto___33410;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33393_33411__$1))
{var c__4314__auto___33412 = cljs.core.chunk_first.call(null,seq__33393_33411__$1);{
var G__33413 = cljs.core.chunk_rest.call(null,seq__33393_33411__$1);
var G__33414 = c__4314__auto___33412;
var G__33415 = cljs.core.count.call(null,c__4314__auto___33412);
var G__33416 = (0);
seq__33393_33399 = G__33413;
chunk__33394_33400 = G__33414;
count__33395_33401 = G__33415;
i__33396_33402 = G__33416;
continue;
}
} else
{var vec__33398_33417 = cljs.core.first.call(null,seq__33393_33411__$1);var name_33418 = cljs.core.nth.call(null,vec__33398_33417,(0),null);var value_33419 = cljs.core.nth.call(null,vec__33398_33417,(1),null);domina.set_attr_BANG_.call(null,content,name_33418,value_33419);
{
var G__33420 = cljs.core.next.call(null,seq__33393_33411__$1);
var G__33421 = null;
var G__33422 = (0);
var G__33423 = (0);
seq__33393_33399 = G__33420;
chunk__33394_33400 = G__33421;
count__33395_33401 = G__33422;
i__33396_33402 = G__33423;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33428_33432 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33429_33433 = null;var count__33430_33434 = (0);var i__33431_33435 = (0);while(true){
if((i__33431_33435 < count__33430_33434))
{var node_33436 = cljs.core._nth.call(null,chunk__33429_33433,i__33431_33435);goog.dom.classes.add(node_33436,class$);
{
var G__33437 = seq__33428_33432;
var G__33438 = chunk__33429_33433;
var G__33439 = count__33430_33434;
var G__33440 = (i__33431_33435 + (1));
seq__33428_33432 = G__33437;
chunk__33429_33433 = G__33438;
count__33430_33434 = G__33439;
i__33431_33435 = G__33440;
continue;
}
} else
{var temp__4126__auto___33441 = cljs.core.seq.call(null,seq__33428_33432);if(temp__4126__auto___33441)
{var seq__33428_33442__$1 = temp__4126__auto___33441;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33428_33442__$1))
{var c__4314__auto___33443 = cljs.core.chunk_first.call(null,seq__33428_33442__$1);{
var G__33444 = cljs.core.chunk_rest.call(null,seq__33428_33442__$1);
var G__33445 = c__4314__auto___33443;
var G__33446 = cljs.core.count.call(null,c__4314__auto___33443);
var G__33447 = (0);
seq__33428_33432 = G__33444;
chunk__33429_33433 = G__33445;
count__33430_33434 = G__33446;
i__33431_33435 = G__33447;
continue;
}
} else
{var node_33448 = cljs.core.first.call(null,seq__33428_33442__$1);goog.dom.classes.add(node_33448,class$);
{
var G__33449 = cljs.core.next.call(null,seq__33428_33442__$1);
var G__33450 = null;
var G__33451 = (0);
var G__33452 = (0);
seq__33428_33432 = G__33449;
chunk__33429_33433 = G__33450;
count__33430_33434 = G__33451;
i__33431_33435 = G__33452;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33457_33461 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33458_33462 = null;var count__33459_33463 = (0);var i__33460_33464 = (0);while(true){
if((i__33460_33464 < count__33459_33463))
{var node_33465 = cljs.core._nth.call(null,chunk__33458_33462,i__33460_33464);goog.dom.classes.remove(node_33465,class$);
{
var G__33466 = seq__33457_33461;
var G__33467 = chunk__33458_33462;
var G__33468 = count__33459_33463;
var G__33469 = (i__33460_33464 + (1));
seq__33457_33461 = G__33466;
chunk__33458_33462 = G__33467;
count__33459_33463 = G__33468;
i__33460_33464 = G__33469;
continue;
}
} else
{var temp__4126__auto___33470 = cljs.core.seq.call(null,seq__33457_33461);if(temp__4126__auto___33470)
{var seq__33457_33471__$1 = temp__4126__auto___33470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33457_33471__$1))
{var c__4314__auto___33472 = cljs.core.chunk_first.call(null,seq__33457_33471__$1);{
var G__33473 = cljs.core.chunk_rest.call(null,seq__33457_33471__$1);
var G__33474 = c__4314__auto___33472;
var G__33475 = cljs.core.count.call(null,c__4314__auto___33472);
var G__33476 = (0);
seq__33457_33461 = G__33473;
chunk__33458_33462 = G__33474;
count__33459_33463 = G__33475;
i__33460_33464 = G__33476;
continue;
}
} else
{var node_33477 = cljs.core.first.call(null,seq__33457_33471__$1);goog.dom.classes.remove(node_33477,class$);
{
var G__33478 = cljs.core.next.call(null,seq__33457_33471__$1);
var G__33479 = null;
var G__33480 = (0);
var G__33481 = (0);
seq__33457_33461 = G__33478;
chunk__33458_33462 = G__33479;
count__33459_33463 = G__33480;
i__33460_33464 = G__33481;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33486_33490 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33487_33491 = null;var count__33488_33492 = (0);var i__33489_33493 = (0);while(true){
if((i__33489_33493 < count__33488_33492))
{var node_33494 = cljs.core._nth.call(null,chunk__33487_33491,i__33489_33493);goog.dom.classes.toggle(node_33494,class$);
{
var G__33495 = seq__33486_33490;
var G__33496 = chunk__33487_33491;
var G__33497 = count__33488_33492;
var G__33498 = (i__33489_33493 + (1));
seq__33486_33490 = G__33495;
chunk__33487_33491 = G__33496;
count__33488_33492 = G__33497;
i__33489_33493 = G__33498;
continue;
}
} else
{var temp__4126__auto___33499 = cljs.core.seq.call(null,seq__33486_33490);if(temp__4126__auto___33499)
{var seq__33486_33500__$1 = temp__4126__auto___33499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33486_33500__$1))
{var c__4314__auto___33501 = cljs.core.chunk_first.call(null,seq__33486_33500__$1);{
var G__33502 = cljs.core.chunk_rest.call(null,seq__33486_33500__$1);
var G__33503 = c__4314__auto___33501;
var G__33504 = cljs.core.count.call(null,c__4314__auto___33501);
var G__33505 = (0);
seq__33486_33490 = G__33502;
chunk__33487_33491 = G__33503;
count__33488_33492 = G__33504;
i__33489_33493 = G__33505;
continue;
}
} else
{var node_33506 = cljs.core.first.call(null,seq__33486_33500__$1);goog.dom.classes.toggle(node_33506,class$);
{
var G__33507 = cljs.core.next.call(null,seq__33486_33500__$1);
var G__33508 = null;
var G__33509 = (0);
var G__33510 = (0);
seq__33486_33490 = G__33507;
chunk__33487_33491 = G__33508;
count__33488_33492 = G__33509;
i__33489_33493 = G__33510;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33519__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33515_33520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33516_33521 = null;var count__33517_33522 = (0);var i__33518_33523 = (0);while(true){
if((i__33518_33523 < count__33517_33522))
{var node_33524 = cljs.core._nth.call(null,chunk__33516_33521,i__33518_33523);goog.dom.classes.set(node_33524,classes_33519__$1);
{
var G__33525 = seq__33515_33520;
var G__33526 = chunk__33516_33521;
var G__33527 = count__33517_33522;
var G__33528 = (i__33518_33523 + (1));
seq__33515_33520 = G__33525;
chunk__33516_33521 = G__33526;
count__33517_33522 = G__33527;
i__33518_33523 = G__33528;
continue;
}
} else
{var temp__4126__auto___33529 = cljs.core.seq.call(null,seq__33515_33520);if(temp__4126__auto___33529)
{var seq__33515_33530__$1 = temp__4126__auto___33529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33515_33530__$1))
{var c__4314__auto___33531 = cljs.core.chunk_first.call(null,seq__33515_33530__$1);{
var G__33532 = cljs.core.chunk_rest.call(null,seq__33515_33530__$1);
var G__33533 = c__4314__auto___33531;
var G__33534 = cljs.core.count.call(null,c__4314__auto___33531);
var G__33535 = (0);
seq__33515_33520 = G__33532;
chunk__33516_33521 = G__33533;
count__33517_33522 = G__33534;
i__33518_33523 = G__33535;
continue;
}
} else
{var node_33536 = cljs.core.first.call(null,seq__33515_33530__$1);goog.dom.classes.set(node_33536,classes_33519__$1);
{
var G__33537 = cljs.core.next.call(null,seq__33515_33530__$1);
var G__33538 = null;
var G__33539 = (0);
var G__33540 = (0);
seq__33515_33520 = G__33537;
chunk__33516_33521 = G__33538;
count__33517_33522 = G__33539;
i__33518_33523 = G__33540;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33545_33549 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33546_33550 = null;var count__33547_33551 = (0);var i__33548_33552 = (0);while(true){
if((i__33548_33552 < count__33547_33551))
{var node_33553 = cljs.core._nth.call(null,chunk__33546_33550,i__33548_33552);goog.dom.setTextContent(node_33553,value);
{
var G__33554 = seq__33545_33549;
var G__33555 = chunk__33546_33550;
var G__33556 = count__33547_33551;
var G__33557 = (i__33548_33552 + (1));
seq__33545_33549 = G__33554;
chunk__33546_33550 = G__33555;
count__33547_33551 = G__33556;
i__33548_33552 = G__33557;
continue;
}
} else
{var temp__4126__auto___33558 = cljs.core.seq.call(null,seq__33545_33549);if(temp__4126__auto___33558)
{var seq__33545_33559__$1 = temp__4126__auto___33558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33545_33559__$1))
{var c__4314__auto___33560 = cljs.core.chunk_first.call(null,seq__33545_33559__$1);{
var G__33561 = cljs.core.chunk_rest.call(null,seq__33545_33559__$1);
var G__33562 = c__4314__auto___33560;
var G__33563 = cljs.core.count.call(null,c__4314__auto___33560);
var G__33564 = (0);
seq__33545_33549 = G__33561;
chunk__33546_33550 = G__33562;
count__33547_33551 = G__33563;
i__33548_33552 = G__33564;
continue;
}
} else
{var node_33565 = cljs.core.first.call(null,seq__33545_33559__$1);goog.dom.setTextContent(node_33565,value);
{
var G__33566 = cljs.core.next.call(null,seq__33545_33559__$1);
var G__33567 = null;
var G__33568 = (0);
var G__33569 = (0);
seq__33545_33549 = G__33566;
chunk__33546_33550 = G__33567;
count__33547_33551 = G__33568;
i__33548_33552 = G__33569;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33574_33578 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33575_33579 = null;var count__33576_33580 = (0);var i__33577_33581 = (0);while(true){
if((i__33577_33581 < count__33576_33580))
{var node_33582 = cljs.core._nth.call(null,chunk__33575_33579,i__33577_33581);goog.dom.forms.setValue(node_33582,value);
{
var G__33583 = seq__33574_33578;
var G__33584 = chunk__33575_33579;
var G__33585 = count__33576_33580;
var G__33586 = (i__33577_33581 + (1));
seq__33574_33578 = G__33583;
chunk__33575_33579 = G__33584;
count__33576_33580 = G__33585;
i__33577_33581 = G__33586;
continue;
}
} else
{var temp__4126__auto___33587 = cljs.core.seq.call(null,seq__33574_33578);if(temp__4126__auto___33587)
{var seq__33574_33588__$1 = temp__4126__auto___33587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33574_33588__$1))
{var c__4314__auto___33589 = cljs.core.chunk_first.call(null,seq__33574_33588__$1);{
var G__33590 = cljs.core.chunk_rest.call(null,seq__33574_33588__$1);
var G__33591 = c__4314__auto___33589;
var G__33592 = cljs.core.count.call(null,c__4314__auto___33589);
var G__33593 = (0);
seq__33574_33578 = G__33590;
chunk__33575_33579 = G__33591;
count__33576_33580 = G__33592;
i__33577_33581 = G__33593;
continue;
}
} else
{var node_33594 = cljs.core.first.call(null,seq__33574_33588__$1);goog.dom.forms.setValue(node_33594,value);
{
var G__33595 = cljs.core.next.call(null,seq__33574_33588__$1);
var G__33596 = null;
var G__33597 = (0);
var G__33598 = (0);
seq__33574_33578 = G__33595;
chunk__33575_33579 = G__33596;
count__33576_33580 = G__33597;
i__33577_33581 = G__33598;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_33609 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33605_33610 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33606_33611 = null;var count__33607_33612 = (0);var i__33608_33613 = (0);while(true){
if((i__33608_33613 < count__33607_33612))
{var node_33614 = cljs.core._nth.call(null,chunk__33606_33611,i__33608_33613);node_33614.innerHTML = value_33609;
{
var G__33615 = seq__33605_33610;
var G__33616 = chunk__33606_33611;
var G__33617 = count__33607_33612;
var G__33618 = (i__33608_33613 + (1));
seq__33605_33610 = G__33615;
chunk__33606_33611 = G__33616;
count__33607_33612 = G__33617;
i__33608_33613 = G__33618;
continue;
}
} else
{var temp__4126__auto___33619 = cljs.core.seq.call(null,seq__33605_33610);if(temp__4126__auto___33619)
{var seq__33605_33620__$1 = temp__4126__auto___33619;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33605_33620__$1))
{var c__4314__auto___33621 = cljs.core.chunk_first.call(null,seq__33605_33620__$1);{
var G__33622 = cljs.core.chunk_rest.call(null,seq__33605_33620__$1);
var G__33623 = c__4314__auto___33621;
var G__33624 = cljs.core.count.call(null,c__4314__auto___33621);
var G__33625 = (0);
seq__33605_33610 = G__33622;
chunk__33606_33611 = G__33623;
count__33607_33612 = G__33624;
i__33608_33613 = G__33625;
continue;
}
} else
{var node_33626 = cljs.core.first.call(null,seq__33605_33620__$1);node_33626.innerHTML = value_33609;
{
var G__33627 = cljs.core.next.call(null,seq__33605_33620__$1);
var G__33628 = null;
var G__33629 = (0);
var G__33630 = (0);
seq__33605_33610 = G__33627;
chunk__33606_33611 = G__33628;
count__33607_33612 = G__33629;
i__33608_33613 = G__33630;
continue;
}
}
} else
{}
}
break;
}
}catch (e33604){if((e33604 instanceof Error))
{var e_33631 = e33604;domina.replace_children_BANG_.call(null,content,value_33609);
} else
{throw e33604;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33638_33642 = cljs.core.seq.call(null,children);var chunk__33639_33643 = null;var count__33640_33644 = (0);var i__33641_33645 = (0);while(true){
if((i__33641_33645 < count__33640_33644))
{var child_33646 = cljs.core._nth.call(null,chunk__33639_33643,i__33641_33645);frag.appendChild(child_33646);
{
var G__33647 = seq__33638_33642;
var G__33648 = chunk__33639_33643;
var G__33649 = count__33640_33644;
var G__33650 = (i__33641_33645 + (1));
seq__33638_33642 = G__33647;
chunk__33639_33643 = G__33648;
count__33640_33644 = G__33649;
i__33641_33645 = G__33650;
continue;
}
} else
{var temp__4126__auto___33651 = cljs.core.seq.call(null,seq__33638_33642);if(temp__4126__auto___33651)
{var seq__33638_33652__$1 = temp__4126__auto___33651;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33638_33652__$1))
{var c__4314__auto___33653 = cljs.core.chunk_first.call(null,seq__33638_33652__$1);{
var G__33654 = cljs.core.chunk_rest.call(null,seq__33638_33652__$1);
var G__33655 = c__4314__auto___33653;
var G__33656 = cljs.core.count.call(null,c__4314__auto___33653);
var G__33657 = (0);
seq__33638_33642 = G__33654;
chunk__33639_33643 = G__33655;
count__33640_33644 = G__33656;
i__33641_33645 = G__33657;
continue;
}
} else
{var child_33658 = cljs.core.first.call(null,seq__33638_33652__$1);frag.appendChild(child_33658);
{
var G__33659 = cljs.core.next.call(null,seq__33638_33652__$1);
var G__33660 = null;
var G__33661 = (0);
var G__33662 = (0);
seq__33638_33642 = G__33659;
chunk__33639_33643 = G__33660;
count__33640_33644 = G__33661;
i__33641_33645 = G__33662;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__33632_SHARP_,p2__33633_SHARP_){return f.call(null,p1__33632_SHARP_,p2__33633_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__33664 = list_thing;if(G__33664)
{var bit__4208__auto__ = (G__33664.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__33664.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33664);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__33665 = content;if(G__33665)
{var bit__4208__auto__ = (G__33665.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__33665.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33665.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33665);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__33666 = content;if(G__33666)
{var bit__4208__auto__ = (G__33666.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__33666.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33666.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33666);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33666);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
