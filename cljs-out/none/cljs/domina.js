// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_57216 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_57217 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_57218 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_57218,opt_wrapper_57216,table_section_wrapper_57217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_57216,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_57217,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_57217,cell_wrapper_57218,table_section_wrapper_57217,table_section_wrapper_57217]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__57223 = cljs.core.seq.call(null,tbody);var chunk__57224 = null;var count__57225 = (0);var i__57226 = (0);while(true){
if((i__57226 < count__57225))
{var child = cljs.core._nth.call(null,chunk__57224,i__57226);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57227 = seq__57223;
var G__57228 = chunk__57224;
var G__57229 = count__57225;
var G__57230 = (i__57226 + (1));
seq__57223 = G__57227;
chunk__57224 = G__57228;
count__57225 = G__57229;
i__57226 = G__57230;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57223);if(temp__4126__auto__)
{var seq__57223__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57223__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__57223__$1);{
var G__57231 = cljs.core.chunk_rest.call(null,seq__57223__$1);
var G__57232 = c__4299__auto__;
var G__57233 = cljs.core.count.call(null,c__4299__auto__);
var G__57234 = (0);
seq__57223 = G__57231;
chunk__57224 = G__57232;
count__57225 = G__57233;
i__57226 = G__57234;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__57223__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57235 = cljs.core.next.call(null,seq__57223__$1);
var G__57236 = null;
var G__57237 = (0);
var G__57238 = (0);
seq__57223 = G__57235;
chunk__57224 = G__57236;
count__57225 = G__57237;
i__57226 = G__57238;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__57240 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__57240,(0),null);var start_wrap = cljs.core.nth.call(null,vec__57240,(1),null);var end_wrap = cljs.core.nth.call(null,vec__57240,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__57241 = wrapper.lastChild;
var G__57242 = (level - (1));
wrapper = G__57241;
level = G__57242;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj57244 = {};return obj57244;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__57245){
var mesg = cljs.core.seq(arglist__57245);
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
log.cljs$lang$applyTo = (function (arglist__57246){
var mesg = cljs.core.seq(arglist__57246);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__57247){
var contents = cljs.core.seq(arglist__57247);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__57248_SHARP_){return p1__57248_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__57249_SHARP_,p2__57250_SHARP_){return goog.dom.insertChildAt(p1__57249_SHARP_,p2__57250_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57252_SHARP_,p2__57251_SHARP_){return goog.dom.insertSiblingBefore(p2__57251_SHARP_,p1__57252_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57254_SHARP_,p2__57253_SHARP_){return goog.dom.insertSiblingAfter(p2__57253_SHARP_,p1__57254_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__57256_SHARP_,p2__57255_SHARP_){return goog.dom.replaceNode(p2__57255_SHARP_,p1__57256_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__57261_57265 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57262_57266 = null;var count__57263_57267 = (0);var i__57264_57268 = (0);while(true){
if((i__57264_57268 < count__57263_57267))
{var n_57269 = cljs.core._nth.call(null,chunk__57262_57266,i__57264_57268);goog.style.setStyle(n_57269,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57270 = seq__57261_57265;
var G__57271 = chunk__57262_57266;
var G__57272 = count__57263_57267;
var G__57273 = (i__57264_57268 + (1));
seq__57261_57265 = G__57270;
chunk__57262_57266 = G__57271;
count__57263_57267 = G__57272;
i__57264_57268 = G__57273;
continue;
}
} else
{var temp__4126__auto___57274 = cljs.core.seq.call(null,seq__57261_57265);if(temp__4126__auto___57274)
{var seq__57261_57275__$1 = temp__4126__auto___57274;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57261_57275__$1))
{var c__4299__auto___57276 = cljs.core.chunk_first.call(null,seq__57261_57275__$1);{
var G__57277 = cljs.core.chunk_rest.call(null,seq__57261_57275__$1);
var G__57278 = c__4299__auto___57276;
var G__57279 = cljs.core.count.call(null,c__4299__auto___57276);
var G__57280 = (0);
seq__57261_57265 = G__57277;
chunk__57262_57266 = G__57278;
count__57263_57267 = G__57279;
i__57264_57268 = G__57280;
continue;
}
} else
{var n_57281 = cljs.core.first.call(null,seq__57261_57275__$1);goog.style.setStyle(n_57281,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57282 = cljs.core.next.call(null,seq__57261_57275__$1);
var G__57283 = null;
var G__57284 = (0);
var G__57285 = (0);
seq__57261_57265 = G__57282;
chunk__57262_57266 = G__57283;
count__57263_57267 = G__57284;
i__57264_57268 = G__57285;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__57286){
var content = cljs.core.first(arglist__57286);
arglist__57286 = cljs.core.next(arglist__57286);
var name = cljs.core.first(arglist__57286);
var value = cljs.core.rest(arglist__57286);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__57291_57295 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57292_57296 = null;var count__57293_57297 = (0);var i__57294_57298 = (0);while(true){
if((i__57294_57298 < count__57293_57297))
{var n_57299 = cljs.core._nth.call(null,chunk__57292_57296,i__57294_57298);n_57299.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57300 = seq__57291_57295;
var G__57301 = chunk__57292_57296;
var G__57302 = count__57293_57297;
var G__57303 = (i__57294_57298 + (1));
seq__57291_57295 = G__57300;
chunk__57292_57296 = G__57301;
count__57293_57297 = G__57302;
i__57294_57298 = G__57303;
continue;
}
} else
{var temp__4126__auto___57304 = cljs.core.seq.call(null,seq__57291_57295);if(temp__4126__auto___57304)
{var seq__57291_57305__$1 = temp__4126__auto___57304;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57291_57305__$1))
{var c__4299__auto___57306 = cljs.core.chunk_first.call(null,seq__57291_57305__$1);{
var G__57307 = cljs.core.chunk_rest.call(null,seq__57291_57305__$1);
var G__57308 = c__4299__auto___57306;
var G__57309 = cljs.core.count.call(null,c__4299__auto___57306);
var G__57310 = (0);
seq__57291_57295 = G__57307;
chunk__57292_57296 = G__57308;
count__57293_57297 = G__57309;
i__57294_57298 = G__57310;
continue;
}
} else
{var n_57311 = cljs.core.first.call(null,seq__57291_57305__$1);n_57311.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57312 = cljs.core.next.call(null,seq__57291_57305__$1);
var G__57313 = null;
var G__57314 = (0);
var G__57315 = (0);
seq__57291_57295 = G__57312;
chunk__57292_57296 = G__57313;
count__57293_57297 = G__57314;
i__57294_57298 = G__57315;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__57316){
var content = cljs.core.first(arglist__57316);
arglist__57316 = cljs.core.next(arglist__57316);
var name = cljs.core.first(arglist__57316);
var value = cljs.core.rest(arglist__57316);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__57321_57325 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57322_57326 = null;var count__57323_57327 = (0);var i__57324_57328 = (0);while(true){
if((i__57324_57328 < count__57323_57327))
{var n_57329 = cljs.core._nth.call(null,chunk__57322_57326,i__57324_57328);n_57329.removeAttribute(cljs.core.name.call(null,name));
{
var G__57330 = seq__57321_57325;
var G__57331 = chunk__57322_57326;
var G__57332 = count__57323_57327;
var G__57333 = (i__57324_57328 + (1));
seq__57321_57325 = G__57330;
chunk__57322_57326 = G__57331;
count__57323_57327 = G__57332;
i__57324_57328 = G__57333;
continue;
}
} else
{var temp__4126__auto___57334 = cljs.core.seq.call(null,seq__57321_57325);if(temp__4126__auto___57334)
{var seq__57321_57335__$1 = temp__4126__auto___57334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57321_57335__$1))
{var c__4299__auto___57336 = cljs.core.chunk_first.call(null,seq__57321_57335__$1);{
var G__57337 = cljs.core.chunk_rest.call(null,seq__57321_57335__$1);
var G__57338 = c__4299__auto___57336;
var G__57339 = cljs.core.count.call(null,c__4299__auto___57336);
var G__57340 = (0);
seq__57321_57325 = G__57337;
chunk__57322_57326 = G__57338;
count__57323_57327 = G__57339;
i__57324_57328 = G__57340;
continue;
}
} else
{var n_57341 = cljs.core.first.call(null,seq__57321_57335__$1);n_57341.removeAttribute(cljs.core.name.call(null,name));
{
var G__57342 = cljs.core.next.call(null,seq__57321_57335__$1);
var G__57343 = null;
var G__57344 = (0);
var G__57345 = (0);
seq__57321_57325 = G__57342;
chunk__57322_57326 = G__57343;
count__57323_57327 = G__57344;
i__57324_57328 = G__57345;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__57347 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__57347,(0),null);var v = cljs.core.nth.call(null,vec__57347,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__57348_SHARP_){var attr = attrs__$1.item(p1__57348_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__57355_57361 = cljs.core.seq.call(null,styles);var chunk__57356_57362 = null;var count__57357_57363 = (0);var i__57358_57364 = (0);while(true){
if((i__57358_57364 < count__57357_57363))
{var vec__57359_57365 = cljs.core._nth.call(null,chunk__57356_57362,i__57358_57364);var name_57366 = cljs.core.nth.call(null,vec__57359_57365,(0),null);var value_57367 = cljs.core.nth.call(null,vec__57359_57365,(1),null);domina.set_style_BANG_.call(null,content,name_57366,value_57367);
{
var G__57368 = seq__57355_57361;
var G__57369 = chunk__57356_57362;
var G__57370 = count__57357_57363;
var G__57371 = (i__57358_57364 + (1));
seq__57355_57361 = G__57368;
chunk__57356_57362 = G__57369;
count__57357_57363 = G__57370;
i__57358_57364 = G__57371;
continue;
}
} else
{var temp__4126__auto___57372 = cljs.core.seq.call(null,seq__57355_57361);if(temp__4126__auto___57372)
{var seq__57355_57373__$1 = temp__4126__auto___57372;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57355_57373__$1))
{var c__4299__auto___57374 = cljs.core.chunk_first.call(null,seq__57355_57373__$1);{
var G__57375 = cljs.core.chunk_rest.call(null,seq__57355_57373__$1);
var G__57376 = c__4299__auto___57374;
var G__57377 = cljs.core.count.call(null,c__4299__auto___57374);
var G__57378 = (0);
seq__57355_57361 = G__57375;
chunk__57356_57362 = G__57376;
count__57357_57363 = G__57377;
i__57358_57364 = G__57378;
continue;
}
} else
{var vec__57360_57379 = cljs.core.first.call(null,seq__57355_57373__$1);var name_57380 = cljs.core.nth.call(null,vec__57360_57379,(0),null);var value_57381 = cljs.core.nth.call(null,vec__57360_57379,(1),null);domina.set_style_BANG_.call(null,content,name_57380,value_57381);
{
var G__57382 = cljs.core.next.call(null,seq__57355_57373__$1);
var G__57383 = null;
var G__57384 = (0);
var G__57385 = (0);
seq__57355_57361 = G__57382;
chunk__57356_57362 = G__57383;
count__57357_57363 = G__57384;
i__57358_57364 = G__57385;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__57392_57398 = cljs.core.seq.call(null,attrs);var chunk__57393_57399 = null;var count__57394_57400 = (0);var i__57395_57401 = (0);while(true){
if((i__57395_57401 < count__57394_57400))
{var vec__57396_57402 = cljs.core._nth.call(null,chunk__57393_57399,i__57395_57401);var name_57403 = cljs.core.nth.call(null,vec__57396_57402,(0),null);var value_57404 = cljs.core.nth.call(null,vec__57396_57402,(1),null);domina.set_attr_BANG_.call(null,content,name_57403,value_57404);
{
var G__57405 = seq__57392_57398;
var G__57406 = chunk__57393_57399;
var G__57407 = count__57394_57400;
var G__57408 = (i__57395_57401 + (1));
seq__57392_57398 = G__57405;
chunk__57393_57399 = G__57406;
count__57394_57400 = G__57407;
i__57395_57401 = G__57408;
continue;
}
} else
{var temp__4126__auto___57409 = cljs.core.seq.call(null,seq__57392_57398);if(temp__4126__auto___57409)
{var seq__57392_57410__$1 = temp__4126__auto___57409;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57392_57410__$1))
{var c__4299__auto___57411 = cljs.core.chunk_first.call(null,seq__57392_57410__$1);{
var G__57412 = cljs.core.chunk_rest.call(null,seq__57392_57410__$1);
var G__57413 = c__4299__auto___57411;
var G__57414 = cljs.core.count.call(null,c__4299__auto___57411);
var G__57415 = (0);
seq__57392_57398 = G__57412;
chunk__57393_57399 = G__57413;
count__57394_57400 = G__57414;
i__57395_57401 = G__57415;
continue;
}
} else
{var vec__57397_57416 = cljs.core.first.call(null,seq__57392_57410__$1);var name_57417 = cljs.core.nth.call(null,vec__57397_57416,(0),null);var value_57418 = cljs.core.nth.call(null,vec__57397_57416,(1),null);domina.set_attr_BANG_.call(null,content,name_57417,value_57418);
{
var G__57419 = cljs.core.next.call(null,seq__57392_57410__$1);
var G__57420 = null;
var G__57421 = (0);
var G__57422 = (0);
seq__57392_57398 = G__57419;
chunk__57393_57399 = G__57420;
count__57394_57400 = G__57421;
i__57395_57401 = G__57422;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__57427_57431 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57428_57432 = null;var count__57429_57433 = (0);var i__57430_57434 = (0);while(true){
if((i__57430_57434 < count__57429_57433))
{var node_57435 = cljs.core._nth.call(null,chunk__57428_57432,i__57430_57434);goog.dom.classes.add(node_57435,class$);
{
var G__57436 = seq__57427_57431;
var G__57437 = chunk__57428_57432;
var G__57438 = count__57429_57433;
var G__57439 = (i__57430_57434 + (1));
seq__57427_57431 = G__57436;
chunk__57428_57432 = G__57437;
count__57429_57433 = G__57438;
i__57430_57434 = G__57439;
continue;
}
} else
{var temp__4126__auto___57440 = cljs.core.seq.call(null,seq__57427_57431);if(temp__4126__auto___57440)
{var seq__57427_57441__$1 = temp__4126__auto___57440;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57427_57441__$1))
{var c__4299__auto___57442 = cljs.core.chunk_first.call(null,seq__57427_57441__$1);{
var G__57443 = cljs.core.chunk_rest.call(null,seq__57427_57441__$1);
var G__57444 = c__4299__auto___57442;
var G__57445 = cljs.core.count.call(null,c__4299__auto___57442);
var G__57446 = (0);
seq__57427_57431 = G__57443;
chunk__57428_57432 = G__57444;
count__57429_57433 = G__57445;
i__57430_57434 = G__57446;
continue;
}
} else
{var node_57447 = cljs.core.first.call(null,seq__57427_57441__$1);goog.dom.classes.add(node_57447,class$);
{
var G__57448 = cljs.core.next.call(null,seq__57427_57441__$1);
var G__57449 = null;
var G__57450 = (0);
var G__57451 = (0);
seq__57427_57431 = G__57448;
chunk__57428_57432 = G__57449;
count__57429_57433 = G__57450;
i__57430_57434 = G__57451;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__57456_57460 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57457_57461 = null;var count__57458_57462 = (0);var i__57459_57463 = (0);while(true){
if((i__57459_57463 < count__57458_57462))
{var node_57464 = cljs.core._nth.call(null,chunk__57457_57461,i__57459_57463);goog.dom.classes.remove(node_57464,class$);
{
var G__57465 = seq__57456_57460;
var G__57466 = chunk__57457_57461;
var G__57467 = count__57458_57462;
var G__57468 = (i__57459_57463 + (1));
seq__57456_57460 = G__57465;
chunk__57457_57461 = G__57466;
count__57458_57462 = G__57467;
i__57459_57463 = G__57468;
continue;
}
} else
{var temp__4126__auto___57469 = cljs.core.seq.call(null,seq__57456_57460);if(temp__4126__auto___57469)
{var seq__57456_57470__$1 = temp__4126__auto___57469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57456_57470__$1))
{var c__4299__auto___57471 = cljs.core.chunk_first.call(null,seq__57456_57470__$1);{
var G__57472 = cljs.core.chunk_rest.call(null,seq__57456_57470__$1);
var G__57473 = c__4299__auto___57471;
var G__57474 = cljs.core.count.call(null,c__4299__auto___57471);
var G__57475 = (0);
seq__57456_57460 = G__57472;
chunk__57457_57461 = G__57473;
count__57458_57462 = G__57474;
i__57459_57463 = G__57475;
continue;
}
} else
{var node_57476 = cljs.core.first.call(null,seq__57456_57470__$1);goog.dom.classes.remove(node_57476,class$);
{
var G__57477 = cljs.core.next.call(null,seq__57456_57470__$1);
var G__57478 = null;
var G__57479 = (0);
var G__57480 = (0);
seq__57456_57460 = G__57477;
chunk__57457_57461 = G__57478;
count__57458_57462 = G__57479;
i__57459_57463 = G__57480;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__57485_57489 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57486_57490 = null;var count__57487_57491 = (0);var i__57488_57492 = (0);while(true){
if((i__57488_57492 < count__57487_57491))
{var node_57493 = cljs.core._nth.call(null,chunk__57486_57490,i__57488_57492);goog.dom.classes.toggle(node_57493,class$);
{
var G__57494 = seq__57485_57489;
var G__57495 = chunk__57486_57490;
var G__57496 = count__57487_57491;
var G__57497 = (i__57488_57492 + (1));
seq__57485_57489 = G__57494;
chunk__57486_57490 = G__57495;
count__57487_57491 = G__57496;
i__57488_57492 = G__57497;
continue;
}
} else
{var temp__4126__auto___57498 = cljs.core.seq.call(null,seq__57485_57489);if(temp__4126__auto___57498)
{var seq__57485_57499__$1 = temp__4126__auto___57498;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57485_57499__$1))
{var c__4299__auto___57500 = cljs.core.chunk_first.call(null,seq__57485_57499__$1);{
var G__57501 = cljs.core.chunk_rest.call(null,seq__57485_57499__$1);
var G__57502 = c__4299__auto___57500;
var G__57503 = cljs.core.count.call(null,c__4299__auto___57500);
var G__57504 = (0);
seq__57485_57489 = G__57501;
chunk__57486_57490 = G__57502;
count__57487_57491 = G__57503;
i__57488_57492 = G__57504;
continue;
}
} else
{var node_57505 = cljs.core.first.call(null,seq__57485_57499__$1);goog.dom.classes.toggle(node_57505,class$);
{
var G__57506 = cljs.core.next.call(null,seq__57485_57499__$1);
var G__57507 = null;
var G__57508 = (0);
var G__57509 = (0);
seq__57485_57489 = G__57506;
chunk__57486_57490 = G__57507;
count__57487_57491 = G__57508;
i__57488_57492 = G__57509;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_57518__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__57514_57519 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57515_57520 = null;var count__57516_57521 = (0);var i__57517_57522 = (0);while(true){
if((i__57517_57522 < count__57516_57521))
{var node_57523 = cljs.core._nth.call(null,chunk__57515_57520,i__57517_57522);goog.dom.classes.set(node_57523,classes_57518__$1);
{
var G__57524 = seq__57514_57519;
var G__57525 = chunk__57515_57520;
var G__57526 = count__57516_57521;
var G__57527 = (i__57517_57522 + (1));
seq__57514_57519 = G__57524;
chunk__57515_57520 = G__57525;
count__57516_57521 = G__57526;
i__57517_57522 = G__57527;
continue;
}
} else
{var temp__4126__auto___57528 = cljs.core.seq.call(null,seq__57514_57519);if(temp__4126__auto___57528)
{var seq__57514_57529__$1 = temp__4126__auto___57528;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57514_57529__$1))
{var c__4299__auto___57530 = cljs.core.chunk_first.call(null,seq__57514_57529__$1);{
var G__57531 = cljs.core.chunk_rest.call(null,seq__57514_57529__$1);
var G__57532 = c__4299__auto___57530;
var G__57533 = cljs.core.count.call(null,c__4299__auto___57530);
var G__57534 = (0);
seq__57514_57519 = G__57531;
chunk__57515_57520 = G__57532;
count__57516_57521 = G__57533;
i__57517_57522 = G__57534;
continue;
}
} else
{var node_57535 = cljs.core.first.call(null,seq__57514_57529__$1);goog.dom.classes.set(node_57535,classes_57518__$1);
{
var G__57536 = cljs.core.next.call(null,seq__57514_57529__$1);
var G__57537 = null;
var G__57538 = (0);
var G__57539 = (0);
seq__57514_57519 = G__57536;
chunk__57515_57520 = G__57537;
count__57516_57521 = G__57538;
i__57517_57522 = G__57539;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__57544_57548 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57545_57549 = null;var count__57546_57550 = (0);var i__57547_57551 = (0);while(true){
if((i__57547_57551 < count__57546_57550))
{var node_57552 = cljs.core._nth.call(null,chunk__57545_57549,i__57547_57551);goog.dom.setTextContent(node_57552,value);
{
var G__57553 = seq__57544_57548;
var G__57554 = chunk__57545_57549;
var G__57555 = count__57546_57550;
var G__57556 = (i__57547_57551 + (1));
seq__57544_57548 = G__57553;
chunk__57545_57549 = G__57554;
count__57546_57550 = G__57555;
i__57547_57551 = G__57556;
continue;
}
} else
{var temp__4126__auto___57557 = cljs.core.seq.call(null,seq__57544_57548);if(temp__4126__auto___57557)
{var seq__57544_57558__$1 = temp__4126__auto___57557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57544_57558__$1))
{var c__4299__auto___57559 = cljs.core.chunk_first.call(null,seq__57544_57558__$1);{
var G__57560 = cljs.core.chunk_rest.call(null,seq__57544_57558__$1);
var G__57561 = c__4299__auto___57559;
var G__57562 = cljs.core.count.call(null,c__4299__auto___57559);
var G__57563 = (0);
seq__57544_57548 = G__57560;
chunk__57545_57549 = G__57561;
count__57546_57550 = G__57562;
i__57547_57551 = G__57563;
continue;
}
} else
{var node_57564 = cljs.core.first.call(null,seq__57544_57558__$1);goog.dom.setTextContent(node_57564,value);
{
var G__57565 = cljs.core.next.call(null,seq__57544_57558__$1);
var G__57566 = null;
var G__57567 = (0);
var G__57568 = (0);
seq__57544_57548 = G__57565;
chunk__57545_57549 = G__57566;
count__57546_57550 = G__57567;
i__57547_57551 = G__57568;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__57573_57577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57574_57578 = null;var count__57575_57579 = (0);var i__57576_57580 = (0);while(true){
if((i__57576_57580 < count__57575_57579))
{var node_57581 = cljs.core._nth.call(null,chunk__57574_57578,i__57576_57580);goog.dom.forms.setValue(node_57581,value);
{
var G__57582 = seq__57573_57577;
var G__57583 = chunk__57574_57578;
var G__57584 = count__57575_57579;
var G__57585 = (i__57576_57580 + (1));
seq__57573_57577 = G__57582;
chunk__57574_57578 = G__57583;
count__57575_57579 = G__57584;
i__57576_57580 = G__57585;
continue;
}
} else
{var temp__4126__auto___57586 = cljs.core.seq.call(null,seq__57573_57577);if(temp__4126__auto___57586)
{var seq__57573_57587__$1 = temp__4126__auto___57586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57573_57587__$1))
{var c__4299__auto___57588 = cljs.core.chunk_first.call(null,seq__57573_57587__$1);{
var G__57589 = cljs.core.chunk_rest.call(null,seq__57573_57587__$1);
var G__57590 = c__4299__auto___57588;
var G__57591 = cljs.core.count.call(null,c__4299__auto___57588);
var G__57592 = (0);
seq__57573_57577 = G__57589;
chunk__57574_57578 = G__57590;
count__57575_57579 = G__57591;
i__57576_57580 = G__57592;
continue;
}
} else
{var node_57593 = cljs.core.first.call(null,seq__57573_57587__$1);goog.dom.forms.setValue(node_57593,value);
{
var G__57594 = cljs.core.next.call(null,seq__57573_57587__$1);
var G__57595 = null;
var G__57596 = (0);
var G__57597 = (0);
seq__57573_57577 = G__57594;
chunk__57574_57578 = G__57595;
count__57575_57579 = G__57596;
i__57576_57580 = G__57597;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_57608 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__57604_57609 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57605_57610 = null;var count__57606_57611 = (0);var i__57607_57612 = (0);while(true){
if((i__57607_57612 < count__57606_57611))
{var node_57613 = cljs.core._nth.call(null,chunk__57605_57610,i__57607_57612);node_57613.innerHTML = value_57608;
{
var G__57614 = seq__57604_57609;
var G__57615 = chunk__57605_57610;
var G__57616 = count__57606_57611;
var G__57617 = (i__57607_57612 + (1));
seq__57604_57609 = G__57614;
chunk__57605_57610 = G__57615;
count__57606_57611 = G__57616;
i__57607_57612 = G__57617;
continue;
}
} else
{var temp__4126__auto___57618 = cljs.core.seq.call(null,seq__57604_57609);if(temp__4126__auto___57618)
{var seq__57604_57619__$1 = temp__4126__auto___57618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57604_57619__$1))
{var c__4299__auto___57620 = cljs.core.chunk_first.call(null,seq__57604_57619__$1);{
var G__57621 = cljs.core.chunk_rest.call(null,seq__57604_57619__$1);
var G__57622 = c__4299__auto___57620;
var G__57623 = cljs.core.count.call(null,c__4299__auto___57620);
var G__57624 = (0);
seq__57604_57609 = G__57621;
chunk__57605_57610 = G__57622;
count__57606_57611 = G__57623;
i__57607_57612 = G__57624;
continue;
}
} else
{var node_57625 = cljs.core.first.call(null,seq__57604_57619__$1);node_57625.innerHTML = value_57608;
{
var G__57626 = cljs.core.next.call(null,seq__57604_57619__$1);
var G__57627 = null;
var G__57628 = (0);
var G__57629 = (0);
seq__57604_57609 = G__57626;
chunk__57605_57610 = G__57627;
count__57606_57611 = G__57628;
i__57607_57612 = G__57629;
continue;
}
}
} else
{}
}
break;
}
}catch (e57603){if((e57603 instanceof Error))
{var e_57630 = e57603;domina.replace_children_BANG_.call(null,content,value_57608);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57603;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__57637_57641 = cljs.core.seq.call(null,children);var chunk__57638_57642 = null;var count__57639_57643 = (0);var i__57640_57644 = (0);while(true){
if((i__57640_57644 < count__57639_57643))
{var child_57645 = cljs.core._nth.call(null,chunk__57638_57642,i__57640_57644);frag.appendChild(child_57645);
{
var G__57646 = seq__57637_57641;
var G__57647 = chunk__57638_57642;
var G__57648 = count__57639_57643;
var G__57649 = (i__57640_57644 + (1));
seq__57637_57641 = G__57646;
chunk__57638_57642 = G__57647;
count__57639_57643 = G__57648;
i__57640_57644 = G__57649;
continue;
}
} else
{var temp__4126__auto___57650 = cljs.core.seq.call(null,seq__57637_57641);if(temp__4126__auto___57650)
{var seq__57637_57651__$1 = temp__4126__auto___57650;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57637_57651__$1))
{var c__4299__auto___57652 = cljs.core.chunk_first.call(null,seq__57637_57651__$1);{
var G__57653 = cljs.core.chunk_rest.call(null,seq__57637_57651__$1);
var G__57654 = c__4299__auto___57652;
var G__57655 = cljs.core.count.call(null,c__4299__auto___57652);
var G__57656 = (0);
seq__57637_57641 = G__57653;
chunk__57638_57642 = G__57654;
count__57639_57643 = G__57655;
i__57640_57644 = G__57656;
continue;
}
} else
{var child_57657 = cljs.core.first.call(null,seq__57637_57651__$1);frag.appendChild(child_57657);
{
var G__57658 = cljs.core.next.call(null,seq__57637_57651__$1);
var G__57659 = null;
var G__57660 = (0);
var G__57661 = (0);
seq__57637_57641 = G__57658;
chunk__57638_57642 = G__57659;
count__57639_57643 = G__57660;
i__57640_57644 = G__57661;
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
return (function (p1__57631_SHARP_,p2__57632_SHARP_){return f.call(null,p1__57631_SHARP_,p2__57632_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__57663 = list_thing;if(G__57663)
{var bit__4193__auto__ = (G__57663.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__57663.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57663.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57663);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__57664 = content;if(G__57664)
{var bit__4193__auto__ = (G__57664.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__57664.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57664.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57664);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57664);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__57665 = content;if(G__57665)
{var bit__4193__auto__ = (G__57665.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__57665.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57665.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57665);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57665);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
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

//# sourceMappingURL=domina.js.map