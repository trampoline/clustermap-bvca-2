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
var opt_wrapper_39277 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_39279 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_39279,opt_wrapper_39277,table_section_wrapper_39278,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_39277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_39278,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_39278,cell_wrapper_39279,table_section_wrapper_39278,table_section_wrapper_39278]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__39284 = cljs.core.seq.call(null,tbody);var chunk__39285 = null;var count__39286 = (0);var i__39287 = (0);while(true){
if((i__39287 < count__39286))
{var child = cljs.core._nth.call(null,chunk__39285,i__39287);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39288 = seq__39284;
var G__39289 = chunk__39285;
var G__39290 = count__39286;
var G__39291 = (i__39287 + (1));
seq__39284 = G__39288;
chunk__39285 = G__39289;
count__39286 = G__39290;
i__39287 = G__39291;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39284);if(temp__4126__auto__)
{var seq__39284__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39284__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__39284__$1);{
var G__39292 = cljs.core.chunk_rest.call(null,seq__39284__$1);
var G__39293 = c__4314__auto__;
var G__39294 = cljs.core.count.call(null,c__4314__auto__);
var G__39295 = (0);
seq__39284 = G__39292;
chunk__39285 = G__39293;
count__39286 = G__39294;
i__39287 = G__39295;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__39284__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39296 = cljs.core.next.call(null,seq__39284__$1);
var G__39297 = null;
var G__39298 = (0);
var G__39299 = (0);
seq__39284 = G__39296;
chunk__39285 = G__39297;
count__39286 = G__39298;
i__39287 = G__39299;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__39301 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__39301,(0),null);var start_wrap = cljs.core.nth.call(null,vec__39301,(1),null);var end_wrap = cljs.core.nth.call(null,vec__39301,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__39302 = wrapper.lastChild;
var G__39303 = (level - (1));
wrapper = G__39302;
level = G__39303;
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
domina.DomContent = (function (){var obj39305 = {};return obj39305;
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
log_debug.cljs$lang$applyTo = (function (arglist__39306){
var mesg = cljs.core.seq(arglist__39306);
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
log.cljs$lang$applyTo = (function (arglist__39307){
var mesg = cljs.core.seq(arglist__39307);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39308){
var contents = cljs.core.seq(arglist__39308);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__39309_SHARP_){return p1__39309_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__39310_SHARP_,p2__39311_SHARP_){return goog.dom.insertChildAt(p1__39310_SHARP_,p2__39311_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__39313_SHARP_,p2__39312_SHARP_){return goog.dom.insertSiblingBefore(p2__39312_SHARP_,p1__39313_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__39315_SHARP_,p2__39314_SHARP_){return goog.dom.insertSiblingAfter(p2__39314_SHARP_,p1__39315_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__39317_SHARP_,p2__39316_SHARP_){return goog.dom.replaceNode(p2__39316_SHARP_,p1__39317_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39322_39326 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39323_39327 = null;var count__39324_39328 = (0);var i__39325_39329 = (0);while(true){
if((i__39325_39329 < count__39324_39328))
{var n_39330 = cljs.core._nth.call(null,chunk__39323_39327,i__39325_39329);goog.style.setStyle(n_39330,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39331 = seq__39322_39326;
var G__39332 = chunk__39323_39327;
var G__39333 = count__39324_39328;
var G__39334 = (i__39325_39329 + (1));
seq__39322_39326 = G__39331;
chunk__39323_39327 = G__39332;
count__39324_39328 = G__39333;
i__39325_39329 = G__39334;
continue;
}
} else
{var temp__4126__auto___39335 = cljs.core.seq.call(null,seq__39322_39326);if(temp__4126__auto___39335)
{var seq__39322_39336__$1 = temp__4126__auto___39335;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39322_39336__$1))
{var c__4314__auto___39337 = cljs.core.chunk_first.call(null,seq__39322_39336__$1);{
var G__39338 = cljs.core.chunk_rest.call(null,seq__39322_39336__$1);
var G__39339 = c__4314__auto___39337;
var G__39340 = cljs.core.count.call(null,c__4314__auto___39337);
var G__39341 = (0);
seq__39322_39326 = G__39338;
chunk__39323_39327 = G__39339;
count__39324_39328 = G__39340;
i__39325_39329 = G__39341;
continue;
}
} else
{var n_39342 = cljs.core.first.call(null,seq__39322_39336__$1);goog.style.setStyle(n_39342,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39343 = cljs.core.next.call(null,seq__39322_39336__$1);
var G__39344 = null;
var G__39345 = (0);
var G__39346 = (0);
seq__39322_39326 = G__39343;
chunk__39323_39327 = G__39344;
count__39324_39328 = G__39345;
i__39325_39329 = G__39346;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39347){
var content = cljs.core.first(arglist__39347);
arglist__39347 = cljs.core.next(arglist__39347);
var name = cljs.core.first(arglist__39347);
var value = cljs.core.rest(arglist__39347);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39352_39356 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39353_39357 = null;var count__39354_39358 = (0);var i__39355_39359 = (0);while(true){
if((i__39355_39359 < count__39354_39358))
{var n_39360 = cljs.core._nth.call(null,chunk__39353_39357,i__39355_39359);n_39360.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39361 = seq__39352_39356;
var G__39362 = chunk__39353_39357;
var G__39363 = count__39354_39358;
var G__39364 = (i__39355_39359 + (1));
seq__39352_39356 = G__39361;
chunk__39353_39357 = G__39362;
count__39354_39358 = G__39363;
i__39355_39359 = G__39364;
continue;
}
} else
{var temp__4126__auto___39365 = cljs.core.seq.call(null,seq__39352_39356);if(temp__4126__auto___39365)
{var seq__39352_39366__$1 = temp__4126__auto___39365;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39352_39366__$1))
{var c__4314__auto___39367 = cljs.core.chunk_first.call(null,seq__39352_39366__$1);{
var G__39368 = cljs.core.chunk_rest.call(null,seq__39352_39366__$1);
var G__39369 = c__4314__auto___39367;
var G__39370 = cljs.core.count.call(null,c__4314__auto___39367);
var G__39371 = (0);
seq__39352_39356 = G__39368;
chunk__39353_39357 = G__39369;
count__39354_39358 = G__39370;
i__39355_39359 = G__39371;
continue;
}
} else
{var n_39372 = cljs.core.first.call(null,seq__39352_39366__$1);n_39372.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39373 = cljs.core.next.call(null,seq__39352_39366__$1);
var G__39374 = null;
var G__39375 = (0);
var G__39376 = (0);
seq__39352_39356 = G__39373;
chunk__39353_39357 = G__39374;
count__39354_39358 = G__39375;
i__39355_39359 = G__39376;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39377){
var content = cljs.core.first(arglist__39377);
arglist__39377 = cljs.core.next(arglist__39377);
var name = cljs.core.first(arglist__39377);
var value = cljs.core.rest(arglist__39377);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39382_39386 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39383_39387 = null;var count__39384_39388 = (0);var i__39385_39389 = (0);while(true){
if((i__39385_39389 < count__39384_39388))
{var n_39390 = cljs.core._nth.call(null,chunk__39383_39387,i__39385_39389);n_39390.removeAttribute(cljs.core.name.call(null,name));
{
var G__39391 = seq__39382_39386;
var G__39392 = chunk__39383_39387;
var G__39393 = count__39384_39388;
var G__39394 = (i__39385_39389 + (1));
seq__39382_39386 = G__39391;
chunk__39383_39387 = G__39392;
count__39384_39388 = G__39393;
i__39385_39389 = G__39394;
continue;
}
} else
{var temp__4126__auto___39395 = cljs.core.seq.call(null,seq__39382_39386);if(temp__4126__auto___39395)
{var seq__39382_39396__$1 = temp__4126__auto___39395;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39382_39396__$1))
{var c__4314__auto___39397 = cljs.core.chunk_first.call(null,seq__39382_39396__$1);{
var G__39398 = cljs.core.chunk_rest.call(null,seq__39382_39396__$1);
var G__39399 = c__4314__auto___39397;
var G__39400 = cljs.core.count.call(null,c__4314__auto___39397);
var G__39401 = (0);
seq__39382_39386 = G__39398;
chunk__39383_39387 = G__39399;
count__39384_39388 = G__39400;
i__39385_39389 = G__39401;
continue;
}
} else
{var n_39402 = cljs.core.first.call(null,seq__39382_39396__$1);n_39402.removeAttribute(cljs.core.name.call(null,name));
{
var G__39403 = cljs.core.next.call(null,seq__39382_39396__$1);
var G__39404 = null;
var G__39405 = (0);
var G__39406 = (0);
seq__39382_39386 = G__39403;
chunk__39383_39387 = G__39404;
count__39384_39388 = G__39405;
i__39385_39389 = G__39406;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__39408 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__39408,(0),null);var v = cljs.core.nth.call(null,vec__39408,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__39409_SHARP_){var attr = attrs__$1.item(p1__39409_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39416_39422 = cljs.core.seq.call(null,styles);var chunk__39417_39423 = null;var count__39418_39424 = (0);var i__39419_39425 = (0);while(true){
if((i__39419_39425 < count__39418_39424))
{var vec__39420_39426 = cljs.core._nth.call(null,chunk__39417_39423,i__39419_39425);var name_39427 = cljs.core.nth.call(null,vec__39420_39426,(0),null);var value_39428 = cljs.core.nth.call(null,vec__39420_39426,(1),null);domina.set_style_BANG_.call(null,content,name_39427,value_39428);
{
var G__39429 = seq__39416_39422;
var G__39430 = chunk__39417_39423;
var G__39431 = count__39418_39424;
var G__39432 = (i__39419_39425 + (1));
seq__39416_39422 = G__39429;
chunk__39417_39423 = G__39430;
count__39418_39424 = G__39431;
i__39419_39425 = G__39432;
continue;
}
} else
{var temp__4126__auto___39433 = cljs.core.seq.call(null,seq__39416_39422);if(temp__4126__auto___39433)
{var seq__39416_39434__$1 = temp__4126__auto___39433;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39416_39434__$1))
{var c__4314__auto___39435 = cljs.core.chunk_first.call(null,seq__39416_39434__$1);{
var G__39436 = cljs.core.chunk_rest.call(null,seq__39416_39434__$1);
var G__39437 = c__4314__auto___39435;
var G__39438 = cljs.core.count.call(null,c__4314__auto___39435);
var G__39439 = (0);
seq__39416_39422 = G__39436;
chunk__39417_39423 = G__39437;
count__39418_39424 = G__39438;
i__39419_39425 = G__39439;
continue;
}
} else
{var vec__39421_39440 = cljs.core.first.call(null,seq__39416_39434__$1);var name_39441 = cljs.core.nth.call(null,vec__39421_39440,(0),null);var value_39442 = cljs.core.nth.call(null,vec__39421_39440,(1),null);domina.set_style_BANG_.call(null,content,name_39441,value_39442);
{
var G__39443 = cljs.core.next.call(null,seq__39416_39434__$1);
var G__39444 = null;
var G__39445 = (0);
var G__39446 = (0);
seq__39416_39422 = G__39443;
chunk__39417_39423 = G__39444;
count__39418_39424 = G__39445;
i__39419_39425 = G__39446;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39453_39459 = cljs.core.seq.call(null,attrs);var chunk__39454_39460 = null;var count__39455_39461 = (0);var i__39456_39462 = (0);while(true){
if((i__39456_39462 < count__39455_39461))
{var vec__39457_39463 = cljs.core._nth.call(null,chunk__39454_39460,i__39456_39462);var name_39464 = cljs.core.nth.call(null,vec__39457_39463,(0),null);var value_39465 = cljs.core.nth.call(null,vec__39457_39463,(1),null);domina.set_attr_BANG_.call(null,content,name_39464,value_39465);
{
var G__39466 = seq__39453_39459;
var G__39467 = chunk__39454_39460;
var G__39468 = count__39455_39461;
var G__39469 = (i__39456_39462 + (1));
seq__39453_39459 = G__39466;
chunk__39454_39460 = G__39467;
count__39455_39461 = G__39468;
i__39456_39462 = G__39469;
continue;
}
} else
{var temp__4126__auto___39470 = cljs.core.seq.call(null,seq__39453_39459);if(temp__4126__auto___39470)
{var seq__39453_39471__$1 = temp__4126__auto___39470;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39453_39471__$1))
{var c__4314__auto___39472 = cljs.core.chunk_first.call(null,seq__39453_39471__$1);{
var G__39473 = cljs.core.chunk_rest.call(null,seq__39453_39471__$1);
var G__39474 = c__4314__auto___39472;
var G__39475 = cljs.core.count.call(null,c__4314__auto___39472);
var G__39476 = (0);
seq__39453_39459 = G__39473;
chunk__39454_39460 = G__39474;
count__39455_39461 = G__39475;
i__39456_39462 = G__39476;
continue;
}
} else
{var vec__39458_39477 = cljs.core.first.call(null,seq__39453_39471__$1);var name_39478 = cljs.core.nth.call(null,vec__39458_39477,(0),null);var value_39479 = cljs.core.nth.call(null,vec__39458_39477,(1),null);domina.set_attr_BANG_.call(null,content,name_39478,value_39479);
{
var G__39480 = cljs.core.next.call(null,seq__39453_39471__$1);
var G__39481 = null;
var G__39482 = (0);
var G__39483 = (0);
seq__39453_39459 = G__39480;
chunk__39454_39460 = G__39481;
count__39455_39461 = G__39482;
i__39456_39462 = G__39483;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39488_39492 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39489_39493 = null;var count__39490_39494 = (0);var i__39491_39495 = (0);while(true){
if((i__39491_39495 < count__39490_39494))
{var node_39496 = cljs.core._nth.call(null,chunk__39489_39493,i__39491_39495);goog.dom.classes.add(node_39496,class$);
{
var G__39497 = seq__39488_39492;
var G__39498 = chunk__39489_39493;
var G__39499 = count__39490_39494;
var G__39500 = (i__39491_39495 + (1));
seq__39488_39492 = G__39497;
chunk__39489_39493 = G__39498;
count__39490_39494 = G__39499;
i__39491_39495 = G__39500;
continue;
}
} else
{var temp__4126__auto___39501 = cljs.core.seq.call(null,seq__39488_39492);if(temp__4126__auto___39501)
{var seq__39488_39502__$1 = temp__4126__auto___39501;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39488_39502__$1))
{var c__4314__auto___39503 = cljs.core.chunk_first.call(null,seq__39488_39502__$1);{
var G__39504 = cljs.core.chunk_rest.call(null,seq__39488_39502__$1);
var G__39505 = c__4314__auto___39503;
var G__39506 = cljs.core.count.call(null,c__4314__auto___39503);
var G__39507 = (0);
seq__39488_39492 = G__39504;
chunk__39489_39493 = G__39505;
count__39490_39494 = G__39506;
i__39491_39495 = G__39507;
continue;
}
} else
{var node_39508 = cljs.core.first.call(null,seq__39488_39502__$1);goog.dom.classes.add(node_39508,class$);
{
var G__39509 = cljs.core.next.call(null,seq__39488_39502__$1);
var G__39510 = null;
var G__39511 = (0);
var G__39512 = (0);
seq__39488_39492 = G__39509;
chunk__39489_39493 = G__39510;
count__39490_39494 = G__39511;
i__39491_39495 = G__39512;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39517_39521 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39518_39522 = null;var count__39519_39523 = (0);var i__39520_39524 = (0);while(true){
if((i__39520_39524 < count__39519_39523))
{var node_39525 = cljs.core._nth.call(null,chunk__39518_39522,i__39520_39524);goog.dom.classes.remove(node_39525,class$);
{
var G__39526 = seq__39517_39521;
var G__39527 = chunk__39518_39522;
var G__39528 = count__39519_39523;
var G__39529 = (i__39520_39524 + (1));
seq__39517_39521 = G__39526;
chunk__39518_39522 = G__39527;
count__39519_39523 = G__39528;
i__39520_39524 = G__39529;
continue;
}
} else
{var temp__4126__auto___39530 = cljs.core.seq.call(null,seq__39517_39521);if(temp__4126__auto___39530)
{var seq__39517_39531__$1 = temp__4126__auto___39530;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39517_39531__$1))
{var c__4314__auto___39532 = cljs.core.chunk_first.call(null,seq__39517_39531__$1);{
var G__39533 = cljs.core.chunk_rest.call(null,seq__39517_39531__$1);
var G__39534 = c__4314__auto___39532;
var G__39535 = cljs.core.count.call(null,c__4314__auto___39532);
var G__39536 = (0);
seq__39517_39521 = G__39533;
chunk__39518_39522 = G__39534;
count__39519_39523 = G__39535;
i__39520_39524 = G__39536;
continue;
}
} else
{var node_39537 = cljs.core.first.call(null,seq__39517_39531__$1);goog.dom.classes.remove(node_39537,class$);
{
var G__39538 = cljs.core.next.call(null,seq__39517_39531__$1);
var G__39539 = null;
var G__39540 = (0);
var G__39541 = (0);
seq__39517_39521 = G__39538;
chunk__39518_39522 = G__39539;
count__39519_39523 = G__39540;
i__39520_39524 = G__39541;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39546_39550 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39547_39551 = null;var count__39548_39552 = (0);var i__39549_39553 = (0);while(true){
if((i__39549_39553 < count__39548_39552))
{var node_39554 = cljs.core._nth.call(null,chunk__39547_39551,i__39549_39553);goog.dom.classes.toggle(node_39554,class$);
{
var G__39555 = seq__39546_39550;
var G__39556 = chunk__39547_39551;
var G__39557 = count__39548_39552;
var G__39558 = (i__39549_39553 + (1));
seq__39546_39550 = G__39555;
chunk__39547_39551 = G__39556;
count__39548_39552 = G__39557;
i__39549_39553 = G__39558;
continue;
}
} else
{var temp__4126__auto___39559 = cljs.core.seq.call(null,seq__39546_39550);if(temp__4126__auto___39559)
{var seq__39546_39560__$1 = temp__4126__auto___39559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39546_39560__$1))
{var c__4314__auto___39561 = cljs.core.chunk_first.call(null,seq__39546_39560__$1);{
var G__39562 = cljs.core.chunk_rest.call(null,seq__39546_39560__$1);
var G__39563 = c__4314__auto___39561;
var G__39564 = cljs.core.count.call(null,c__4314__auto___39561);
var G__39565 = (0);
seq__39546_39550 = G__39562;
chunk__39547_39551 = G__39563;
count__39548_39552 = G__39564;
i__39549_39553 = G__39565;
continue;
}
} else
{var node_39566 = cljs.core.first.call(null,seq__39546_39560__$1);goog.dom.classes.toggle(node_39566,class$);
{
var G__39567 = cljs.core.next.call(null,seq__39546_39560__$1);
var G__39568 = null;
var G__39569 = (0);
var G__39570 = (0);
seq__39546_39550 = G__39567;
chunk__39547_39551 = G__39568;
count__39548_39552 = G__39569;
i__39549_39553 = G__39570;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39579__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__39575_39580 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39576_39581 = null;var count__39577_39582 = (0);var i__39578_39583 = (0);while(true){
if((i__39578_39583 < count__39577_39582))
{var node_39584 = cljs.core._nth.call(null,chunk__39576_39581,i__39578_39583);goog.dom.classes.set(node_39584,classes_39579__$1);
{
var G__39585 = seq__39575_39580;
var G__39586 = chunk__39576_39581;
var G__39587 = count__39577_39582;
var G__39588 = (i__39578_39583 + (1));
seq__39575_39580 = G__39585;
chunk__39576_39581 = G__39586;
count__39577_39582 = G__39587;
i__39578_39583 = G__39588;
continue;
}
} else
{var temp__4126__auto___39589 = cljs.core.seq.call(null,seq__39575_39580);if(temp__4126__auto___39589)
{var seq__39575_39590__$1 = temp__4126__auto___39589;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39575_39590__$1))
{var c__4314__auto___39591 = cljs.core.chunk_first.call(null,seq__39575_39590__$1);{
var G__39592 = cljs.core.chunk_rest.call(null,seq__39575_39590__$1);
var G__39593 = c__4314__auto___39591;
var G__39594 = cljs.core.count.call(null,c__4314__auto___39591);
var G__39595 = (0);
seq__39575_39580 = G__39592;
chunk__39576_39581 = G__39593;
count__39577_39582 = G__39594;
i__39578_39583 = G__39595;
continue;
}
} else
{var node_39596 = cljs.core.first.call(null,seq__39575_39590__$1);goog.dom.classes.set(node_39596,classes_39579__$1);
{
var G__39597 = cljs.core.next.call(null,seq__39575_39590__$1);
var G__39598 = null;
var G__39599 = (0);
var G__39600 = (0);
seq__39575_39580 = G__39597;
chunk__39576_39581 = G__39598;
count__39577_39582 = G__39599;
i__39578_39583 = G__39600;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39605_39609 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39606_39610 = null;var count__39607_39611 = (0);var i__39608_39612 = (0);while(true){
if((i__39608_39612 < count__39607_39611))
{var node_39613 = cljs.core._nth.call(null,chunk__39606_39610,i__39608_39612);goog.dom.setTextContent(node_39613,value);
{
var G__39614 = seq__39605_39609;
var G__39615 = chunk__39606_39610;
var G__39616 = count__39607_39611;
var G__39617 = (i__39608_39612 + (1));
seq__39605_39609 = G__39614;
chunk__39606_39610 = G__39615;
count__39607_39611 = G__39616;
i__39608_39612 = G__39617;
continue;
}
} else
{var temp__4126__auto___39618 = cljs.core.seq.call(null,seq__39605_39609);if(temp__4126__auto___39618)
{var seq__39605_39619__$1 = temp__4126__auto___39618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39605_39619__$1))
{var c__4314__auto___39620 = cljs.core.chunk_first.call(null,seq__39605_39619__$1);{
var G__39621 = cljs.core.chunk_rest.call(null,seq__39605_39619__$1);
var G__39622 = c__4314__auto___39620;
var G__39623 = cljs.core.count.call(null,c__4314__auto___39620);
var G__39624 = (0);
seq__39605_39609 = G__39621;
chunk__39606_39610 = G__39622;
count__39607_39611 = G__39623;
i__39608_39612 = G__39624;
continue;
}
} else
{var node_39625 = cljs.core.first.call(null,seq__39605_39619__$1);goog.dom.setTextContent(node_39625,value);
{
var G__39626 = cljs.core.next.call(null,seq__39605_39619__$1);
var G__39627 = null;
var G__39628 = (0);
var G__39629 = (0);
seq__39605_39609 = G__39626;
chunk__39606_39610 = G__39627;
count__39607_39611 = G__39628;
i__39608_39612 = G__39629;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39634_39638 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39635_39639 = null;var count__39636_39640 = (0);var i__39637_39641 = (0);while(true){
if((i__39637_39641 < count__39636_39640))
{var node_39642 = cljs.core._nth.call(null,chunk__39635_39639,i__39637_39641);goog.dom.forms.setValue(node_39642,value);
{
var G__39643 = seq__39634_39638;
var G__39644 = chunk__39635_39639;
var G__39645 = count__39636_39640;
var G__39646 = (i__39637_39641 + (1));
seq__39634_39638 = G__39643;
chunk__39635_39639 = G__39644;
count__39636_39640 = G__39645;
i__39637_39641 = G__39646;
continue;
}
} else
{var temp__4126__auto___39647 = cljs.core.seq.call(null,seq__39634_39638);if(temp__4126__auto___39647)
{var seq__39634_39648__$1 = temp__4126__auto___39647;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39634_39648__$1))
{var c__4314__auto___39649 = cljs.core.chunk_first.call(null,seq__39634_39648__$1);{
var G__39650 = cljs.core.chunk_rest.call(null,seq__39634_39648__$1);
var G__39651 = c__4314__auto___39649;
var G__39652 = cljs.core.count.call(null,c__4314__auto___39649);
var G__39653 = (0);
seq__39634_39638 = G__39650;
chunk__39635_39639 = G__39651;
count__39636_39640 = G__39652;
i__39637_39641 = G__39653;
continue;
}
} else
{var node_39654 = cljs.core.first.call(null,seq__39634_39648__$1);goog.dom.forms.setValue(node_39654,value);
{
var G__39655 = cljs.core.next.call(null,seq__39634_39648__$1);
var G__39656 = null;
var G__39657 = (0);
var G__39658 = (0);
seq__39634_39638 = G__39655;
chunk__39635_39639 = G__39656;
count__39636_39640 = G__39657;
i__39637_39641 = G__39658;
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
{var value_39669 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39665_39670 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39666_39671 = null;var count__39667_39672 = (0);var i__39668_39673 = (0);while(true){
if((i__39668_39673 < count__39667_39672))
{var node_39674 = cljs.core._nth.call(null,chunk__39666_39671,i__39668_39673);node_39674.innerHTML = value_39669;
{
var G__39675 = seq__39665_39670;
var G__39676 = chunk__39666_39671;
var G__39677 = count__39667_39672;
var G__39678 = (i__39668_39673 + (1));
seq__39665_39670 = G__39675;
chunk__39666_39671 = G__39676;
count__39667_39672 = G__39677;
i__39668_39673 = G__39678;
continue;
}
} else
{var temp__4126__auto___39679 = cljs.core.seq.call(null,seq__39665_39670);if(temp__4126__auto___39679)
{var seq__39665_39680__$1 = temp__4126__auto___39679;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39665_39680__$1))
{var c__4314__auto___39681 = cljs.core.chunk_first.call(null,seq__39665_39680__$1);{
var G__39682 = cljs.core.chunk_rest.call(null,seq__39665_39680__$1);
var G__39683 = c__4314__auto___39681;
var G__39684 = cljs.core.count.call(null,c__4314__auto___39681);
var G__39685 = (0);
seq__39665_39670 = G__39682;
chunk__39666_39671 = G__39683;
count__39667_39672 = G__39684;
i__39668_39673 = G__39685;
continue;
}
} else
{var node_39686 = cljs.core.first.call(null,seq__39665_39680__$1);node_39686.innerHTML = value_39669;
{
var G__39687 = cljs.core.next.call(null,seq__39665_39680__$1);
var G__39688 = null;
var G__39689 = (0);
var G__39690 = (0);
seq__39665_39670 = G__39687;
chunk__39666_39671 = G__39688;
count__39667_39672 = G__39689;
i__39668_39673 = G__39690;
continue;
}
}
} else
{}
}
break;
}
}catch (e39664){if((e39664 instanceof Error))
{var e_39691 = e39664;domina.replace_children_BANG_.call(null,content,value_39669);
} else
{throw e39664;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39698_39702 = cljs.core.seq.call(null,children);var chunk__39699_39703 = null;var count__39700_39704 = (0);var i__39701_39705 = (0);while(true){
if((i__39701_39705 < count__39700_39704))
{var child_39706 = cljs.core._nth.call(null,chunk__39699_39703,i__39701_39705);frag.appendChild(child_39706);
{
var G__39707 = seq__39698_39702;
var G__39708 = chunk__39699_39703;
var G__39709 = count__39700_39704;
var G__39710 = (i__39701_39705 + (1));
seq__39698_39702 = G__39707;
chunk__39699_39703 = G__39708;
count__39700_39704 = G__39709;
i__39701_39705 = G__39710;
continue;
}
} else
{var temp__4126__auto___39711 = cljs.core.seq.call(null,seq__39698_39702);if(temp__4126__auto___39711)
{var seq__39698_39712__$1 = temp__4126__auto___39711;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39698_39712__$1))
{var c__4314__auto___39713 = cljs.core.chunk_first.call(null,seq__39698_39712__$1);{
var G__39714 = cljs.core.chunk_rest.call(null,seq__39698_39712__$1);
var G__39715 = c__4314__auto___39713;
var G__39716 = cljs.core.count.call(null,c__4314__auto___39713);
var G__39717 = (0);
seq__39698_39702 = G__39714;
chunk__39699_39703 = G__39715;
count__39700_39704 = G__39716;
i__39701_39705 = G__39717;
continue;
}
} else
{var child_39718 = cljs.core.first.call(null,seq__39698_39712__$1);frag.appendChild(child_39718);
{
var G__39719 = cljs.core.next.call(null,seq__39698_39712__$1);
var G__39720 = null;
var G__39721 = (0);
var G__39722 = (0);
seq__39698_39702 = G__39719;
chunk__39699_39703 = G__39720;
count__39700_39704 = G__39721;
i__39701_39705 = G__39722;
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
return (function (p1__39692_SHARP_,p2__39693_SHARP_){return f.call(null,p1__39692_SHARP_,p2__39693_SHARP_);
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
{if((function (){var G__39724 = list_thing;if(G__39724)
{var bit__4208__auto__ = (G__39724.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39724.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39724.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39724);
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
{if((function (){var G__39725 = content;if(G__39725)
{var bit__4208__auto__ = (G__39725.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39725.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39725);
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
{if((function (){var G__39726 = content;if(G__39726)
{var bit__4208__auto__ = (G__39726.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39726.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39726.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39726);
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
