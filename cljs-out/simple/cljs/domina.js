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
var opt_wrapper_39283 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_39284 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_39285 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_39285,opt_wrapper_39283,table_section_wrapper_39284,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_39283,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_39284,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_39284,cell_wrapper_39285,table_section_wrapper_39284,table_section_wrapper_39284]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__39290 = cljs.core.seq.call(null,tbody);var chunk__39291 = null;var count__39292 = (0);var i__39293 = (0);while(true){
if((i__39293 < count__39292))
{var child = cljs.core._nth.call(null,chunk__39291,i__39293);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39294 = seq__39290;
var G__39295 = chunk__39291;
var G__39296 = count__39292;
var G__39297 = (i__39293 + (1));
seq__39290 = G__39294;
chunk__39291 = G__39295;
count__39292 = G__39296;
i__39293 = G__39297;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__39290);if(temp__4126__auto__)
{var seq__39290__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39290__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__39290__$1);{
var G__39298 = cljs.core.chunk_rest.call(null,seq__39290__$1);
var G__39299 = c__4314__auto__;
var G__39300 = cljs.core.count.call(null,c__4314__auto__);
var G__39301 = (0);
seq__39290 = G__39298;
chunk__39291 = G__39299;
count__39292 = G__39300;
i__39293 = G__39301;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__39290__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__39302 = cljs.core.next.call(null,seq__39290__$1);
var G__39303 = null;
var G__39304 = (0);
var G__39305 = (0);
seq__39290 = G__39302;
chunk__39291 = G__39303;
count__39292 = G__39304;
i__39293 = G__39305;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__39307 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__39307,(0),null);var start_wrap = cljs.core.nth.call(null,vec__39307,(1),null);var end_wrap = cljs.core.nth.call(null,vec__39307,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__39308 = wrapper.lastChild;
var G__39309 = (level - (1));
wrapper = G__39308;
level = G__39309;
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
domina.DomContent = (function (){var obj39311 = {};return obj39311;
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
log_debug.cljs$lang$applyTo = (function (arglist__39312){
var mesg = cljs.core.seq(arglist__39312);
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
log.cljs$lang$applyTo = (function (arglist__39313){
var mesg = cljs.core.seq(arglist__39313);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__39314){
var contents = cljs.core.seq(arglist__39314);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__39315_SHARP_){return p1__39315_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__39316_SHARP_,p2__39317_SHARP_){return goog.dom.insertChildAt(p1__39316_SHARP_,p2__39317_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__39319_SHARP_,p2__39318_SHARP_){return goog.dom.insertSiblingBefore(p2__39318_SHARP_,p1__39319_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__39321_SHARP_,p2__39320_SHARP_){return goog.dom.insertSiblingAfter(p2__39320_SHARP_,p1__39321_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__39323_SHARP_,p2__39322_SHARP_){return goog.dom.replaceNode(p2__39322_SHARP_,p1__39323_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__39328_39332 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39329_39333 = null;var count__39330_39334 = (0);var i__39331_39335 = (0);while(true){
if((i__39331_39335 < count__39330_39334))
{var n_39336 = cljs.core._nth.call(null,chunk__39329_39333,i__39331_39335);goog.style.setStyle(n_39336,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39337 = seq__39328_39332;
var G__39338 = chunk__39329_39333;
var G__39339 = count__39330_39334;
var G__39340 = (i__39331_39335 + (1));
seq__39328_39332 = G__39337;
chunk__39329_39333 = G__39338;
count__39330_39334 = G__39339;
i__39331_39335 = G__39340;
continue;
}
} else
{var temp__4126__auto___39341 = cljs.core.seq.call(null,seq__39328_39332);if(temp__4126__auto___39341)
{var seq__39328_39342__$1 = temp__4126__auto___39341;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39328_39342__$1))
{var c__4314__auto___39343 = cljs.core.chunk_first.call(null,seq__39328_39342__$1);{
var G__39344 = cljs.core.chunk_rest.call(null,seq__39328_39342__$1);
var G__39345 = c__4314__auto___39343;
var G__39346 = cljs.core.count.call(null,c__4314__auto___39343);
var G__39347 = (0);
seq__39328_39332 = G__39344;
chunk__39329_39333 = G__39345;
count__39330_39334 = G__39346;
i__39331_39335 = G__39347;
continue;
}
} else
{var n_39348 = cljs.core.first.call(null,seq__39328_39342__$1);goog.style.setStyle(n_39348,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39349 = cljs.core.next.call(null,seq__39328_39342__$1);
var G__39350 = null;
var G__39351 = (0);
var G__39352 = (0);
seq__39328_39332 = G__39349;
chunk__39329_39333 = G__39350;
count__39330_39334 = G__39351;
i__39331_39335 = G__39352;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__39353){
var content = cljs.core.first(arglist__39353);
arglist__39353 = cljs.core.next(arglist__39353);
var name = cljs.core.first(arglist__39353);
var value = cljs.core.rest(arglist__39353);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__39358_39362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39359_39363 = null;var count__39360_39364 = (0);var i__39361_39365 = (0);while(true){
if((i__39361_39365 < count__39360_39364))
{var n_39366 = cljs.core._nth.call(null,chunk__39359_39363,i__39361_39365);n_39366.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39367 = seq__39358_39362;
var G__39368 = chunk__39359_39363;
var G__39369 = count__39360_39364;
var G__39370 = (i__39361_39365 + (1));
seq__39358_39362 = G__39367;
chunk__39359_39363 = G__39368;
count__39360_39364 = G__39369;
i__39361_39365 = G__39370;
continue;
}
} else
{var temp__4126__auto___39371 = cljs.core.seq.call(null,seq__39358_39362);if(temp__4126__auto___39371)
{var seq__39358_39372__$1 = temp__4126__auto___39371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39358_39372__$1))
{var c__4314__auto___39373 = cljs.core.chunk_first.call(null,seq__39358_39372__$1);{
var G__39374 = cljs.core.chunk_rest.call(null,seq__39358_39372__$1);
var G__39375 = c__4314__auto___39373;
var G__39376 = cljs.core.count.call(null,c__4314__auto___39373);
var G__39377 = (0);
seq__39358_39362 = G__39374;
chunk__39359_39363 = G__39375;
count__39360_39364 = G__39376;
i__39361_39365 = G__39377;
continue;
}
} else
{var n_39378 = cljs.core.first.call(null,seq__39358_39372__$1);n_39378.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__39379 = cljs.core.next.call(null,seq__39358_39372__$1);
var G__39380 = null;
var G__39381 = (0);
var G__39382 = (0);
seq__39358_39362 = G__39379;
chunk__39359_39363 = G__39380;
count__39360_39364 = G__39381;
i__39361_39365 = G__39382;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__39383){
var content = cljs.core.first(arglist__39383);
arglist__39383 = cljs.core.next(arglist__39383);
var name = cljs.core.first(arglist__39383);
var value = cljs.core.rest(arglist__39383);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__39388_39392 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39389_39393 = null;var count__39390_39394 = (0);var i__39391_39395 = (0);while(true){
if((i__39391_39395 < count__39390_39394))
{var n_39396 = cljs.core._nth.call(null,chunk__39389_39393,i__39391_39395);n_39396.removeAttribute(cljs.core.name.call(null,name));
{
var G__39397 = seq__39388_39392;
var G__39398 = chunk__39389_39393;
var G__39399 = count__39390_39394;
var G__39400 = (i__39391_39395 + (1));
seq__39388_39392 = G__39397;
chunk__39389_39393 = G__39398;
count__39390_39394 = G__39399;
i__39391_39395 = G__39400;
continue;
}
} else
{var temp__4126__auto___39401 = cljs.core.seq.call(null,seq__39388_39392);if(temp__4126__auto___39401)
{var seq__39388_39402__$1 = temp__4126__auto___39401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39388_39402__$1))
{var c__4314__auto___39403 = cljs.core.chunk_first.call(null,seq__39388_39402__$1);{
var G__39404 = cljs.core.chunk_rest.call(null,seq__39388_39402__$1);
var G__39405 = c__4314__auto___39403;
var G__39406 = cljs.core.count.call(null,c__4314__auto___39403);
var G__39407 = (0);
seq__39388_39392 = G__39404;
chunk__39389_39393 = G__39405;
count__39390_39394 = G__39406;
i__39391_39395 = G__39407;
continue;
}
} else
{var n_39408 = cljs.core.first.call(null,seq__39388_39402__$1);n_39408.removeAttribute(cljs.core.name.call(null,name));
{
var G__39409 = cljs.core.next.call(null,seq__39388_39402__$1);
var G__39410 = null;
var G__39411 = (0);
var G__39412 = (0);
seq__39388_39392 = G__39409;
chunk__39389_39393 = G__39410;
count__39390_39394 = G__39411;
i__39391_39395 = G__39412;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__39414 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__39414,(0),null);var v = cljs.core.nth.call(null,vec__39414,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
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
return (function (p1__39415_SHARP_){var attr = attrs__$1.item(p1__39415_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__39422_39428 = cljs.core.seq.call(null,styles);var chunk__39423_39429 = null;var count__39424_39430 = (0);var i__39425_39431 = (0);while(true){
if((i__39425_39431 < count__39424_39430))
{var vec__39426_39432 = cljs.core._nth.call(null,chunk__39423_39429,i__39425_39431);var name_39433 = cljs.core.nth.call(null,vec__39426_39432,(0),null);var value_39434 = cljs.core.nth.call(null,vec__39426_39432,(1),null);domina.set_style_BANG_.call(null,content,name_39433,value_39434);
{
var G__39435 = seq__39422_39428;
var G__39436 = chunk__39423_39429;
var G__39437 = count__39424_39430;
var G__39438 = (i__39425_39431 + (1));
seq__39422_39428 = G__39435;
chunk__39423_39429 = G__39436;
count__39424_39430 = G__39437;
i__39425_39431 = G__39438;
continue;
}
} else
{var temp__4126__auto___39439 = cljs.core.seq.call(null,seq__39422_39428);if(temp__4126__auto___39439)
{var seq__39422_39440__$1 = temp__4126__auto___39439;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39422_39440__$1))
{var c__4314__auto___39441 = cljs.core.chunk_first.call(null,seq__39422_39440__$1);{
var G__39442 = cljs.core.chunk_rest.call(null,seq__39422_39440__$1);
var G__39443 = c__4314__auto___39441;
var G__39444 = cljs.core.count.call(null,c__4314__auto___39441);
var G__39445 = (0);
seq__39422_39428 = G__39442;
chunk__39423_39429 = G__39443;
count__39424_39430 = G__39444;
i__39425_39431 = G__39445;
continue;
}
} else
{var vec__39427_39446 = cljs.core.first.call(null,seq__39422_39440__$1);var name_39447 = cljs.core.nth.call(null,vec__39427_39446,(0),null);var value_39448 = cljs.core.nth.call(null,vec__39427_39446,(1),null);domina.set_style_BANG_.call(null,content,name_39447,value_39448);
{
var G__39449 = cljs.core.next.call(null,seq__39422_39440__$1);
var G__39450 = null;
var G__39451 = (0);
var G__39452 = (0);
seq__39422_39428 = G__39449;
chunk__39423_39429 = G__39450;
count__39424_39430 = G__39451;
i__39425_39431 = G__39452;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__39459_39465 = cljs.core.seq.call(null,attrs);var chunk__39460_39466 = null;var count__39461_39467 = (0);var i__39462_39468 = (0);while(true){
if((i__39462_39468 < count__39461_39467))
{var vec__39463_39469 = cljs.core._nth.call(null,chunk__39460_39466,i__39462_39468);var name_39470 = cljs.core.nth.call(null,vec__39463_39469,(0),null);var value_39471 = cljs.core.nth.call(null,vec__39463_39469,(1),null);domina.set_attr_BANG_.call(null,content,name_39470,value_39471);
{
var G__39472 = seq__39459_39465;
var G__39473 = chunk__39460_39466;
var G__39474 = count__39461_39467;
var G__39475 = (i__39462_39468 + (1));
seq__39459_39465 = G__39472;
chunk__39460_39466 = G__39473;
count__39461_39467 = G__39474;
i__39462_39468 = G__39475;
continue;
}
} else
{var temp__4126__auto___39476 = cljs.core.seq.call(null,seq__39459_39465);if(temp__4126__auto___39476)
{var seq__39459_39477__$1 = temp__4126__auto___39476;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39459_39477__$1))
{var c__4314__auto___39478 = cljs.core.chunk_first.call(null,seq__39459_39477__$1);{
var G__39479 = cljs.core.chunk_rest.call(null,seq__39459_39477__$1);
var G__39480 = c__4314__auto___39478;
var G__39481 = cljs.core.count.call(null,c__4314__auto___39478);
var G__39482 = (0);
seq__39459_39465 = G__39479;
chunk__39460_39466 = G__39480;
count__39461_39467 = G__39481;
i__39462_39468 = G__39482;
continue;
}
} else
{var vec__39464_39483 = cljs.core.first.call(null,seq__39459_39477__$1);var name_39484 = cljs.core.nth.call(null,vec__39464_39483,(0),null);var value_39485 = cljs.core.nth.call(null,vec__39464_39483,(1),null);domina.set_attr_BANG_.call(null,content,name_39484,value_39485);
{
var G__39486 = cljs.core.next.call(null,seq__39459_39477__$1);
var G__39487 = null;
var G__39488 = (0);
var G__39489 = (0);
seq__39459_39465 = G__39486;
chunk__39460_39466 = G__39487;
count__39461_39467 = G__39488;
i__39462_39468 = G__39489;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__39494_39498 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39495_39499 = null;var count__39496_39500 = (0);var i__39497_39501 = (0);while(true){
if((i__39497_39501 < count__39496_39500))
{var node_39502 = cljs.core._nth.call(null,chunk__39495_39499,i__39497_39501);goog.dom.classes.add(node_39502,class$);
{
var G__39503 = seq__39494_39498;
var G__39504 = chunk__39495_39499;
var G__39505 = count__39496_39500;
var G__39506 = (i__39497_39501 + (1));
seq__39494_39498 = G__39503;
chunk__39495_39499 = G__39504;
count__39496_39500 = G__39505;
i__39497_39501 = G__39506;
continue;
}
} else
{var temp__4126__auto___39507 = cljs.core.seq.call(null,seq__39494_39498);if(temp__4126__auto___39507)
{var seq__39494_39508__$1 = temp__4126__auto___39507;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39494_39508__$1))
{var c__4314__auto___39509 = cljs.core.chunk_first.call(null,seq__39494_39508__$1);{
var G__39510 = cljs.core.chunk_rest.call(null,seq__39494_39508__$1);
var G__39511 = c__4314__auto___39509;
var G__39512 = cljs.core.count.call(null,c__4314__auto___39509);
var G__39513 = (0);
seq__39494_39498 = G__39510;
chunk__39495_39499 = G__39511;
count__39496_39500 = G__39512;
i__39497_39501 = G__39513;
continue;
}
} else
{var node_39514 = cljs.core.first.call(null,seq__39494_39508__$1);goog.dom.classes.add(node_39514,class$);
{
var G__39515 = cljs.core.next.call(null,seq__39494_39508__$1);
var G__39516 = null;
var G__39517 = (0);
var G__39518 = (0);
seq__39494_39498 = G__39515;
chunk__39495_39499 = G__39516;
count__39496_39500 = G__39517;
i__39497_39501 = G__39518;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__39523_39527 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39524_39528 = null;var count__39525_39529 = (0);var i__39526_39530 = (0);while(true){
if((i__39526_39530 < count__39525_39529))
{var node_39531 = cljs.core._nth.call(null,chunk__39524_39528,i__39526_39530);goog.dom.classes.remove(node_39531,class$);
{
var G__39532 = seq__39523_39527;
var G__39533 = chunk__39524_39528;
var G__39534 = count__39525_39529;
var G__39535 = (i__39526_39530 + (1));
seq__39523_39527 = G__39532;
chunk__39524_39528 = G__39533;
count__39525_39529 = G__39534;
i__39526_39530 = G__39535;
continue;
}
} else
{var temp__4126__auto___39536 = cljs.core.seq.call(null,seq__39523_39527);if(temp__4126__auto___39536)
{var seq__39523_39537__$1 = temp__4126__auto___39536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39523_39537__$1))
{var c__4314__auto___39538 = cljs.core.chunk_first.call(null,seq__39523_39537__$1);{
var G__39539 = cljs.core.chunk_rest.call(null,seq__39523_39537__$1);
var G__39540 = c__4314__auto___39538;
var G__39541 = cljs.core.count.call(null,c__4314__auto___39538);
var G__39542 = (0);
seq__39523_39527 = G__39539;
chunk__39524_39528 = G__39540;
count__39525_39529 = G__39541;
i__39526_39530 = G__39542;
continue;
}
} else
{var node_39543 = cljs.core.first.call(null,seq__39523_39537__$1);goog.dom.classes.remove(node_39543,class$);
{
var G__39544 = cljs.core.next.call(null,seq__39523_39537__$1);
var G__39545 = null;
var G__39546 = (0);
var G__39547 = (0);
seq__39523_39527 = G__39544;
chunk__39524_39528 = G__39545;
count__39525_39529 = G__39546;
i__39526_39530 = G__39547;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__39552_39556 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39553_39557 = null;var count__39554_39558 = (0);var i__39555_39559 = (0);while(true){
if((i__39555_39559 < count__39554_39558))
{var node_39560 = cljs.core._nth.call(null,chunk__39553_39557,i__39555_39559);goog.dom.classes.toggle(node_39560,class$);
{
var G__39561 = seq__39552_39556;
var G__39562 = chunk__39553_39557;
var G__39563 = count__39554_39558;
var G__39564 = (i__39555_39559 + (1));
seq__39552_39556 = G__39561;
chunk__39553_39557 = G__39562;
count__39554_39558 = G__39563;
i__39555_39559 = G__39564;
continue;
}
} else
{var temp__4126__auto___39565 = cljs.core.seq.call(null,seq__39552_39556);if(temp__4126__auto___39565)
{var seq__39552_39566__$1 = temp__4126__auto___39565;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39552_39566__$1))
{var c__4314__auto___39567 = cljs.core.chunk_first.call(null,seq__39552_39566__$1);{
var G__39568 = cljs.core.chunk_rest.call(null,seq__39552_39566__$1);
var G__39569 = c__4314__auto___39567;
var G__39570 = cljs.core.count.call(null,c__4314__auto___39567);
var G__39571 = (0);
seq__39552_39556 = G__39568;
chunk__39553_39557 = G__39569;
count__39554_39558 = G__39570;
i__39555_39559 = G__39571;
continue;
}
} else
{var node_39572 = cljs.core.first.call(null,seq__39552_39566__$1);goog.dom.classes.toggle(node_39572,class$);
{
var G__39573 = cljs.core.next.call(null,seq__39552_39566__$1);
var G__39574 = null;
var G__39575 = (0);
var G__39576 = (0);
seq__39552_39556 = G__39573;
chunk__39553_39557 = G__39574;
count__39554_39558 = G__39575;
i__39555_39559 = G__39576;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_39585__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__39581_39586 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39582_39587 = null;var count__39583_39588 = (0);var i__39584_39589 = (0);while(true){
if((i__39584_39589 < count__39583_39588))
{var node_39590 = cljs.core._nth.call(null,chunk__39582_39587,i__39584_39589);goog.dom.classes.set(node_39590,classes_39585__$1);
{
var G__39591 = seq__39581_39586;
var G__39592 = chunk__39582_39587;
var G__39593 = count__39583_39588;
var G__39594 = (i__39584_39589 + (1));
seq__39581_39586 = G__39591;
chunk__39582_39587 = G__39592;
count__39583_39588 = G__39593;
i__39584_39589 = G__39594;
continue;
}
} else
{var temp__4126__auto___39595 = cljs.core.seq.call(null,seq__39581_39586);if(temp__4126__auto___39595)
{var seq__39581_39596__$1 = temp__4126__auto___39595;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39581_39596__$1))
{var c__4314__auto___39597 = cljs.core.chunk_first.call(null,seq__39581_39596__$1);{
var G__39598 = cljs.core.chunk_rest.call(null,seq__39581_39596__$1);
var G__39599 = c__4314__auto___39597;
var G__39600 = cljs.core.count.call(null,c__4314__auto___39597);
var G__39601 = (0);
seq__39581_39586 = G__39598;
chunk__39582_39587 = G__39599;
count__39583_39588 = G__39600;
i__39584_39589 = G__39601;
continue;
}
} else
{var node_39602 = cljs.core.first.call(null,seq__39581_39596__$1);goog.dom.classes.set(node_39602,classes_39585__$1);
{
var G__39603 = cljs.core.next.call(null,seq__39581_39596__$1);
var G__39604 = null;
var G__39605 = (0);
var G__39606 = (0);
seq__39581_39586 = G__39603;
chunk__39582_39587 = G__39604;
count__39583_39588 = G__39605;
i__39584_39589 = G__39606;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__39611_39615 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39612_39616 = null;var count__39613_39617 = (0);var i__39614_39618 = (0);while(true){
if((i__39614_39618 < count__39613_39617))
{var node_39619 = cljs.core._nth.call(null,chunk__39612_39616,i__39614_39618);goog.dom.setTextContent(node_39619,value);
{
var G__39620 = seq__39611_39615;
var G__39621 = chunk__39612_39616;
var G__39622 = count__39613_39617;
var G__39623 = (i__39614_39618 + (1));
seq__39611_39615 = G__39620;
chunk__39612_39616 = G__39621;
count__39613_39617 = G__39622;
i__39614_39618 = G__39623;
continue;
}
} else
{var temp__4126__auto___39624 = cljs.core.seq.call(null,seq__39611_39615);if(temp__4126__auto___39624)
{var seq__39611_39625__$1 = temp__4126__auto___39624;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39611_39625__$1))
{var c__4314__auto___39626 = cljs.core.chunk_first.call(null,seq__39611_39625__$1);{
var G__39627 = cljs.core.chunk_rest.call(null,seq__39611_39625__$1);
var G__39628 = c__4314__auto___39626;
var G__39629 = cljs.core.count.call(null,c__4314__auto___39626);
var G__39630 = (0);
seq__39611_39615 = G__39627;
chunk__39612_39616 = G__39628;
count__39613_39617 = G__39629;
i__39614_39618 = G__39630;
continue;
}
} else
{var node_39631 = cljs.core.first.call(null,seq__39611_39625__$1);goog.dom.setTextContent(node_39631,value);
{
var G__39632 = cljs.core.next.call(null,seq__39611_39625__$1);
var G__39633 = null;
var G__39634 = (0);
var G__39635 = (0);
seq__39611_39615 = G__39632;
chunk__39612_39616 = G__39633;
count__39613_39617 = G__39634;
i__39614_39618 = G__39635;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__39640_39644 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39641_39645 = null;var count__39642_39646 = (0);var i__39643_39647 = (0);while(true){
if((i__39643_39647 < count__39642_39646))
{var node_39648 = cljs.core._nth.call(null,chunk__39641_39645,i__39643_39647);goog.dom.forms.setValue(node_39648,value);
{
var G__39649 = seq__39640_39644;
var G__39650 = chunk__39641_39645;
var G__39651 = count__39642_39646;
var G__39652 = (i__39643_39647 + (1));
seq__39640_39644 = G__39649;
chunk__39641_39645 = G__39650;
count__39642_39646 = G__39651;
i__39643_39647 = G__39652;
continue;
}
} else
{var temp__4126__auto___39653 = cljs.core.seq.call(null,seq__39640_39644);if(temp__4126__auto___39653)
{var seq__39640_39654__$1 = temp__4126__auto___39653;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39640_39654__$1))
{var c__4314__auto___39655 = cljs.core.chunk_first.call(null,seq__39640_39654__$1);{
var G__39656 = cljs.core.chunk_rest.call(null,seq__39640_39654__$1);
var G__39657 = c__4314__auto___39655;
var G__39658 = cljs.core.count.call(null,c__4314__auto___39655);
var G__39659 = (0);
seq__39640_39644 = G__39656;
chunk__39641_39645 = G__39657;
count__39642_39646 = G__39658;
i__39643_39647 = G__39659;
continue;
}
} else
{var node_39660 = cljs.core.first.call(null,seq__39640_39654__$1);goog.dom.forms.setValue(node_39660,value);
{
var G__39661 = cljs.core.next.call(null,seq__39640_39654__$1);
var G__39662 = null;
var G__39663 = (0);
var G__39664 = (0);
seq__39640_39644 = G__39661;
chunk__39641_39645 = G__39662;
count__39642_39646 = G__39663;
i__39643_39647 = G__39664;
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
{var value_39675 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__39671_39676 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__39672_39677 = null;var count__39673_39678 = (0);var i__39674_39679 = (0);while(true){
if((i__39674_39679 < count__39673_39678))
{var node_39680 = cljs.core._nth.call(null,chunk__39672_39677,i__39674_39679);node_39680.innerHTML = value_39675;
{
var G__39681 = seq__39671_39676;
var G__39682 = chunk__39672_39677;
var G__39683 = count__39673_39678;
var G__39684 = (i__39674_39679 + (1));
seq__39671_39676 = G__39681;
chunk__39672_39677 = G__39682;
count__39673_39678 = G__39683;
i__39674_39679 = G__39684;
continue;
}
} else
{var temp__4126__auto___39685 = cljs.core.seq.call(null,seq__39671_39676);if(temp__4126__auto___39685)
{var seq__39671_39686__$1 = temp__4126__auto___39685;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39671_39686__$1))
{var c__4314__auto___39687 = cljs.core.chunk_first.call(null,seq__39671_39686__$1);{
var G__39688 = cljs.core.chunk_rest.call(null,seq__39671_39686__$1);
var G__39689 = c__4314__auto___39687;
var G__39690 = cljs.core.count.call(null,c__4314__auto___39687);
var G__39691 = (0);
seq__39671_39676 = G__39688;
chunk__39672_39677 = G__39689;
count__39673_39678 = G__39690;
i__39674_39679 = G__39691;
continue;
}
} else
{var node_39692 = cljs.core.first.call(null,seq__39671_39686__$1);node_39692.innerHTML = value_39675;
{
var G__39693 = cljs.core.next.call(null,seq__39671_39686__$1);
var G__39694 = null;
var G__39695 = (0);
var G__39696 = (0);
seq__39671_39676 = G__39693;
chunk__39672_39677 = G__39694;
count__39673_39678 = G__39695;
i__39674_39679 = G__39696;
continue;
}
}
} else
{}
}
break;
}
}catch (e39670){if((e39670 instanceof Error))
{var e_39697 = e39670;domina.replace_children_BANG_.call(null,content,value_39675);
} else
{throw e39670;

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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__39704_39708 = cljs.core.seq.call(null,children);var chunk__39705_39709 = null;var count__39706_39710 = (0);var i__39707_39711 = (0);while(true){
if((i__39707_39711 < count__39706_39710))
{var child_39712 = cljs.core._nth.call(null,chunk__39705_39709,i__39707_39711);frag.appendChild(child_39712);
{
var G__39713 = seq__39704_39708;
var G__39714 = chunk__39705_39709;
var G__39715 = count__39706_39710;
var G__39716 = (i__39707_39711 + (1));
seq__39704_39708 = G__39713;
chunk__39705_39709 = G__39714;
count__39706_39710 = G__39715;
i__39707_39711 = G__39716;
continue;
}
} else
{var temp__4126__auto___39717 = cljs.core.seq.call(null,seq__39704_39708);if(temp__4126__auto___39717)
{var seq__39704_39718__$1 = temp__4126__auto___39717;if(cljs.core.chunked_seq_QMARK_.call(null,seq__39704_39718__$1))
{var c__4314__auto___39719 = cljs.core.chunk_first.call(null,seq__39704_39718__$1);{
var G__39720 = cljs.core.chunk_rest.call(null,seq__39704_39718__$1);
var G__39721 = c__4314__auto___39719;
var G__39722 = cljs.core.count.call(null,c__4314__auto___39719);
var G__39723 = (0);
seq__39704_39708 = G__39720;
chunk__39705_39709 = G__39721;
count__39706_39710 = G__39722;
i__39707_39711 = G__39723;
continue;
}
} else
{var child_39724 = cljs.core.first.call(null,seq__39704_39718__$1);frag.appendChild(child_39724);
{
var G__39725 = cljs.core.next.call(null,seq__39704_39718__$1);
var G__39726 = null;
var G__39727 = (0);
var G__39728 = (0);
seq__39704_39708 = G__39725;
chunk__39705_39709 = G__39726;
count__39706_39710 = G__39727;
i__39707_39711 = G__39728;
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
return (function (p1__39698_SHARP_,p2__39699_SHARP_){return f.call(null,p1__39698_SHARP_,p2__39699_SHARP_);
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
{if((function (){var G__39730 = list_thing;if(G__39730)
{var bit__4208__auto__ = (G__39730.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39730.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39730.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39730);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39730);
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
{if((function (){var G__39731 = content;if(G__39731)
{var bit__4208__auto__ = (G__39731.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39731.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39731.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39731);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39731);
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
{if((function (){var G__39732 = content;if(G__39732)
{var bit__4208__auto__ = (G__39732.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__39732.cljs$core$ISeqable$))
{return true;
} else
{if((!G__39732.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39732);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__39732);
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
