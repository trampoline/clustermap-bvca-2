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
var opt_wrapper_43321 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_43322 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_43323 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$773,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_43323,opt_wrapper_43321,table_section_wrapper_43322,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_43321,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_43322,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_43322,cell_wrapper_43323,table_section_wrapper_43322,table_section_wrapper_43322]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__43328 = cljs.core.seq(tbody);var chunk__43329 = null;var count__43330 = (0);var i__43331 = (0);while(true){
if((i__43331 < count__43330))
{var child = chunk__43329.cljs$core$IIndexed$_nth$arity$2(null,i__43331);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__43332 = seq__43328;
var G__43333 = chunk__43329;
var G__43334 = count__43330;
var G__43335 = (i__43331 + (1));
seq__43328 = G__43332;
chunk__43329 = G__43333;
count__43330 = G__43334;
i__43331 = G__43335;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43328);if(temp__4126__auto__)
{var seq__43328__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43328__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__43328__$1);{
var G__43336 = cljs.core.chunk_rest(seq__43328__$1);
var G__43337 = c__4299__auto__;
var G__43338 = cljs.core.count(c__4299__auto__);
var G__43339 = (0);
seq__43328 = G__43336;
chunk__43329 = G__43337;
count__43330 = G__43338;
i__43331 = G__43339;
continue;
}
} else
{var child = cljs.core.first(seq__43328__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__43340 = cljs.core.next(seq__43328__$1);
var G__43341 = null;
var G__43342 = (0);
var G__43343 = (0);
seq__43328 = G__43340;
chunk__43329 = G__43341;
count__43330 = G__43342;
i__43331 = G__43343;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__43345 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$773.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43345,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__43346 = wrapper.lastChild;
var G__43347 = (level - (1));
wrapper = G__43346;
level = G__43347;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj43349 = {};return obj43349;
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
{throw cljs.core.missing_protocol("DomContent.nodes",content);
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
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__43350){
var mesg = cljs.core.seq(arglist__43350);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__43351){
var mesg = cljs.core.seq(arglist__43351);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__43352){
var contents = cljs.core.seq(arglist__43352);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43353_SHARP_){return p1__43353_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43354_SHARP_,p2__43355_SHARP_){return goog.dom.insertChildAt(p1__43354_SHARP_,p2__43355_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__43354_SHARP_,p2__43355_SHARP_){return goog.dom.insertChildAt(p1__43354_SHARP_,p2__43355_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43357_SHARP_,p2__43356_SHARP_){return goog.dom.insertSiblingBefore(p2__43356_SHARP_,p1__43357_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43357_SHARP_,p2__43356_SHARP_){return goog.dom.insertSiblingBefore(p2__43356_SHARP_,p1__43357_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43359_SHARP_,p2__43358_SHARP_){return goog.dom.insertSiblingAfter(p2__43358_SHARP_,p1__43359_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43359_SHARP_,p2__43358_SHARP_){return goog.dom.insertSiblingAfter(p2__43358_SHARP_,p1__43359_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43361_SHARP_,p2__43360_SHARP_){return goog.dom.replaceNode(p2__43360_SHARP_,p1__43361_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43361_SHARP_,p2__43360_SHARP_){return goog.dom.replaceNode(p2__43360_SHARP_,p1__43361_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__43366_43370 = cljs.core.seq(domina.nodes(content));var chunk__43367_43371 = null;var count__43368_43372 = (0);var i__43369_43373 = (0);while(true){
if((i__43369_43373 < count__43368_43372))
{var n_43374 = chunk__43367_43371.cljs$core$IIndexed$_nth$arity$2(null,i__43369_43373);goog.style.setStyle(n_43374,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43375 = seq__43366_43370;
var G__43376 = chunk__43367_43371;
var G__43377 = count__43368_43372;
var G__43378 = (i__43369_43373 + (1));
seq__43366_43370 = G__43375;
chunk__43367_43371 = G__43376;
count__43368_43372 = G__43377;
i__43369_43373 = G__43378;
continue;
}
} else
{var temp__4126__auto___43379 = cljs.core.seq(seq__43366_43370);if(temp__4126__auto___43379)
{var seq__43366_43380__$1 = temp__4126__auto___43379;if(cljs.core.chunked_seq_QMARK_(seq__43366_43380__$1))
{var c__4299__auto___43381 = cljs.core.chunk_first(seq__43366_43380__$1);{
var G__43382 = cljs.core.chunk_rest(seq__43366_43380__$1);
var G__43383 = c__4299__auto___43381;
var G__43384 = cljs.core.count(c__4299__auto___43381);
var G__43385 = (0);
seq__43366_43370 = G__43382;
chunk__43367_43371 = G__43383;
count__43368_43372 = G__43384;
i__43369_43373 = G__43385;
continue;
}
} else
{var n_43386 = cljs.core.first(seq__43366_43380__$1);goog.style.setStyle(n_43386,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43387 = cljs.core.next(seq__43366_43380__$1);
var G__43388 = null;
var G__43389 = (0);
var G__43390 = (0);
seq__43366_43370 = G__43387;
chunk__43367_43371 = G__43388;
count__43368_43372 = G__43389;
i__43369_43373 = G__43390;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__43391){
var content = cljs.core.first(arglist__43391);
arglist__43391 = cljs.core.next(arglist__43391);
var name = cljs.core.first(arglist__43391);
var value = cljs.core.rest(arglist__43391);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__43396_43400 = cljs.core.seq(domina.nodes(content));var chunk__43397_43401 = null;var count__43398_43402 = (0);var i__43399_43403 = (0);while(true){
if((i__43399_43403 < count__43398_43402))
{var n_43404 = chunk__43397_43401.cljs$core$IIndexed$_nth$arity$2(null,i__43399_43403);n_43404.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43405 = seq__43396_43400;
var G__43406 = chunk__43397_43401;
var G__43407 = count__43398_43402;
var G__43408 = (i__43399_43403 + (1));
seq__43396_43400 = G__43405;
chunk__43397_43401 = G__43406;
count__43398_43402 = G__43407;
i__43399_43403 = G__43408;
continue;
}
} else
{var temp__4126__auto___43409 = cljs.core.seq(seq__43396_43400);if(temp__4126__auto___43409)
{var seq__43396_43410__$1 = temp__4126__auto___43409;if(cljs.core.chunked_seq_QMARK_(seq__43396_43410__$1))
{var c__4299__auto___43411 = cljs.core.chunk_first(seq__43396_43410__$1);{
var G__43412 = cljs.core.chunk_rest(seq__43396_43410__$1);
var G__43413 = c__4299__auto___43411;
var G__43414 = cljs.core.count(c__4299__auto___43411);
var G__43415 = (0);
seq__43396_43400 = G__43412;
chunk__43397_43401 = G__43413;
count__43398_43402 = G__43414;
i__43399_43403 = G__43415;
continue;
}
} else
{var n_43416 = cljs.core.first(seq__43396_43410__$1);n_43416.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43417 = cljs.core.next(seq__43396_43410__$1);
var G__43418 = null;
var G__43419 = (0);
var G__43420 = (0);
seq__43396_43400 = G__43417;
chunk__43397_43401 = G__43418;
count__43398_43402 = G__43419;
i__43399_43403 = G__43420;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__43421){
var content = cljs.core.first(arglist__43421);
arglist__43421 = cljs.core.next(arglist__43421);
var name = cljs.core.first(arglist__43421);
var value = cljs.core.rest(arglist__43421);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__43426_43430 = cljs.core.seq(domina.nodes(content));var chunk__43427_43431 = null;var count__43428_43432 = (0);var i__43429_43433 = (0);while(true){
if((i__43429_43433 < count__43428_43432))
{var n_43434 = chunk__43427_43431.cljs$core$IIndexed$_nth$arity$2(null,i__43429_43433);n_43434.removeAttribute(cljs.core.name(name));
{
var G__43435 = seq__43426_43430;
var G__43436 = chunk__43427_43431;
var G__43437 = count__43428_43432;
var G__43438 = (i__43429_43433 + (1));
seq__43426_43430 = G__43435;
chunk__43427_43431 = G__43436;
count__43428_43432 = G__43437;
i__43429_43433 = G__43438;
continue;
}
} else
{var temp__4126__auto___43439 = cljs.core.seq(seq__43426_43430);if(temp__4126__auto___43439)
{var seq__43426_43440__$1 = temp__4126__auto___43439;if(cljs.core.chunked_seq_QMARK_(seq__43426_43440__$1))
{var c__4299__auto___43441 = cljs.core.chunk_first(seq__43426_43440__$1);{
var G__43442 = cljs.core.chunk_rest(seq__43426_43440__$1);
var G__43443 = c__4299__auto___43441;
var G__43444 = cljs.core.count(c__4299__auto___43441);
var G__43445 = (0);
seq__43426_43430 = G__43442;
chunk__43427_43431 = G__43443;
count__43428_43432 = G__43444;
i__43429_43433 = G__43445;
continue;
}
} else
{var n_43446 = cljs.core.first(seq__43426_43440__$1);n_43446.removeAttribute(cljs.core.name(name));
{
var G__43447 = cljs.core.next(seq__43426_43440__$1);
var G__43448 = null;
var G__43449 = (0);
var G__43450 = (0);
seq__43426_43430 = G__43447;
chunk__43427_43431 = G__43448;
count__43428_43432 = G__43449;
i__43429_43433 = G__43450;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__43452 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43452,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$772)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__43453_SHARP_){var attr = attrs__$1.item(p1__43453_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__43460_43466 = cljs.core.seq(styles);var chunk__43461_43467 = null;var count__43462_43468 = (0);var i__43463_43469 = (0);while(true){
if((i__43463_43469 < count__43462_43468))
{var vec__43464_43470 = chunk__43461_43467.cljs$core$IIndexed$_nth$arity$2(null,i__43463_43469);var name_43471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464_43470,(0),null);var value_43472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43464_43470,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43471,cljs.core.array_seq([value_43472], 0));
{
var G__43473 = seq__43460_43466;
var G__43474 = chunk__43461_43467;
var G__43475 = count__43462_43468;
var G__43476 = (i__43463_43469 + (1));
seq__43460_43466 = G__43473;
chunk__43461_43467 = G__43474;
count__43462_43468 = G__43475;
i__43463_43469 = G__43476;
continue;
}
} else
{var temp__4126__auto___43477 = cljs.core.seq(seq__43460_43466);if(temp__4126__auto___43477)
{var seq__43460_43478__$1 = temp__4126__auto___43477;if(cljs.core.chunked_seq_QMARK_(seq__43460_43478__$1))
{var c__4299__auto___43479 = cljs.core.chunk_first(seq__43460_43478__$1);{
var G__43480 = cljs.core.chunk_rest(seq__43460_43478__$1);
var G__43481 = c__4299__auto___43479;
var G__43482 = cljs.core.count(c__4299__auto___43479);
var G__43483 = (0);
seq__43460_43466 = G__43480;
chunk__43461_43467 = G__43481;
count__43462_43468 = G__43482;
i__43463_43469 = G__43483;
continue;
}
} else
{var vec__43465_43484 = cljs.core.first(seq__43460_43478__$1);var name_43485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43465_43484,(0),null);var value_43486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43465_43484,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43485,cljs.core.array_seq([value_43486], 0));
{
var G__43487 = cljs.core.next(seq__43460_43478__$1);
var G__43488 = null;
var G__43489 = (0);
var G__43490 = (0);
seq__43460_43466 = G__43487;
chunk__43461_43467 = G__43488;
count__43462_43468 = G__43489;
i__43463_43469 = G__43490;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__43497_43503 = cljs.core.seq(attrs);var chunk__43498_43504 = null;var count__43499_43505 = (0);var i__43500_43506 = (0);while(true){
if((i__43500_43506 < count__43499_43505))
{var vec__43501_43507 = chunk__43498_43504.cljs$core$IIndexed$_nth$arity$2(null,i__43500_43506);var name_43508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43501_43507,(0),null);var value_43509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43501_43507,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43508,cljs.core.array_seq([value_43509], 0));
{
var G__43510 = seq__43497_43503;
var G__43511 = chunk__43498_43504;
var G__43512 = count__43499_43505;
var G__43513 = (i__43500_43506 + (1));
seq__43497_43503 = G__43510;
chunk__43498_43504 = G__43511;
count__43499_43505 = G__43512;
i__43500_43506 = G__43513;
continue;
}
} else
{var temp__4126__auto___43514 = cljs.core.seq(seq__43497_43503);if(temp__4126__auto___43514)
{var seq__43497_43515__$1 = temp__4126__auto___43514;if(cljs.core.chunked_seq_QMARK_(seq__43497_43515__$1))
{var c__4299__auto___43516 = cljs.core.chunk_first(seq__43497_43515__$1);{
var G__43517 = cljs.core.chunk_rest(seq__43497_43515__$1);
var G__43518 = c__4299__auto___43516;
var G__43519 = cljs.core.count(c__4299__auto___43516);
var G__43520 = (0);
seq__43497_43503 = G__43517;
chunk__43498_43504 = G__43518;
count__43499_43505 = G__43519;
i__43500_43506 = G__43520;
continue;
}
} else
{var vec__43502_43521 = cljs.core.first(seq__43497_43515__$1);var name_43522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43502_43521,(0),null);var value_43523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43502_43521,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43522,cljs.core.array_seq([value_43523], 0));
{
var G__43524 = cljs.core.next(seq__43497_43515__$1);
var G__43525 = null;
var G__43526 = (0);
var G__43527 = (0);
seq__43497_43503 = G__43524;
chunk__43498_43504 = G__43525;
count__43499_43505 = G__43526;
i__43500_43506 = G__43527;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__43532_43536 = cljs.core.seq(domina.nodes(content));var chunk__43533_43537 = null;var count__43534_43538 = (0);var i__43535_43539 = (0);while(true){
if((i__43535_43539 < count__43534_43538))
{var node_43540 = chunk__43533_43537.cljs$core$IIndexed$_nth$arity$2(null,i__43535_43539);goog.dom.classes.add(node_43540,class$);
{
var G__43541 = seq__43532_43536;
var G__43542 = chunk__43533_43537;
var G__43543 = count__43534_43538;
var G__43544 = (i__43535_43539 + (1));
seq__43532_43536 = G__43541;
chunk__43533_43537 = G__43542;
count__43534_43538 = G__43543;
i__43535_43539 = G__43544;
continue;
}
} else
{var temp__4126__auto___43545 = cljs.core.seq(seq__43532_43536);if(temp__4126__auto___43545)
{var seq__43532_43546__$1 = temp__4126__auto___43545;if(cljs.core.chunked_seq_QMARK_(seq__43532_43546__$1))
{var c__4299__auto___43547 = cljs.core.chunk_first(seq__43532_43546__$1);{
var G__43548 = cljs.core.chunk_rest(seq__43532_43546__$1);
var G__43549 = c__4299__auto___43547;
var G__43550 = cljs.core.count(c__4299__auto___43547);
var G__43551 = (0);
seq__43532_43536 = G__43548;
chunk__43533_43537 = G__43549;
count__43534_43538 = G__43550;
i__43535_43539 = G__43551;
continue;
}
} else
{var node_43552 = cljs.core.first(seq__43532_43546__$1);goog.dom.classes.add(node_43552,class$);
{
var G__43553 = cljs.core.next(seq__43532_43546__$1);
var G__43554 = null;
var G__43555 = (0);
var G__43556 = (0);
seq__43532_43536 = G__43553;
chunk__43533_43537 = G__43554;
count__43534_43538 = G__43555;
i__43535_43539 = G__43556;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__43561_43565 = cljs.core.seq(domina.nodes(content));var chunk__43562_43566 = null;var count__43563_43567 = (0);var i__43564_43568 = (0);while(true){
if((i__43564_43568 < count__43563_43567))
{var node_43569 = chunk__43562_43566.cljs$core$IIndexed$_nth$arity$2(null,i__43564_43568);goog.dom.classes.remove(node_43569,class$);
{
var G__43570 = seq__43561_43565;
var G__43571 = chunk__43562_43566;
var G__43572 = count__43563_43567;
var G__43573 = (i__43564_43568 + (1));
seq__43561_43565 = G__43570;
chunk__43562_43566 = G__43571;
count__43563_43567 = G__43572;
i__43564_43568 = G__43573;
continue;
}
} else
{var temp__4126__auto___43574 = cljs.core.seq(seq__43561_43565);if(temp__4126__auto___43574)
{var seq__43561_43575__$1 = temp__4126__auto___43574;if(cljs.core.chunked_seq_QMARK_(seq__43561_43575__$1))
{var c__4299__auto___43576 = cljs.core.chunk_first(seq__43561_43575__$1);{
var G__43577 = cljs.core.chunk_rest(seq__43561_43575__$1);
var G__43578 = c__4299__auto___43576;
var G__43579 = cljs.core.count(c__4299__auto___43576);
var G__43580 = (0);
seq__43561_43565 = G__43577;
chunk__43562_43566 = G__43578;
count__43563_43567 = G__43579;
i__43564_43568 = G__43580;
continue;
}
} else
{var node_43581 = cljs.core.first(seq__43561_43575__$1);goog.dom.classes.remove(node_43581,class$);
{
var G__43582 = cljs.core.next(seq__43561_43575__$1);
var G__43583 = null;
var G__43584 = (0);
var G__43585 = (0);
seq__43561_43565 = G__43582;
chunk__43562_43566 = G__43583;
count__43563_43567 = G__43584;
i__43564_43568 = G__43585;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__43590_43594 = cljs.core.seq(domina.nodes(content));var chunk__43591_43595 = null;var count__43592_43596 = (0);var i__43593_43597 = (0);while(true){
if((i__43593_43597 < count__43592_43596))
{var node_43598 = chunk__43591_43595.cljs$core$IIndexed$_nth$arity$2(null,i__43593_43597);goog.dom.classes.toggle(node_43598,class$);
{
var G__43599 = seq__43590_43594;
var G__43600 = chunk__43591_43595;
var G__43601 = count__43592_43596;
var G__43602 = (i__43593_43597 + (1));
seq__43590_43594 = G__43599;
chunk__43591_43595 = G__43600;
count__43592_43596 = G__43601;
i__43593_43597 = G__43602;
continue;
}
} else
{var temp__4126__auto___43603 = cljs.core.seq(seq__43590_43594);if(temp__4126__auto___43603)
{var seq__43590_43604__$1 = temp__4126__auto___43603;if(cljs.core.chunked_seq_QMARK_(seq__43590_43604__$1))
{var c__4299__auto___43605 = cljs.core.chunk_first(seq__43590_43604__$1);{
var G__43606 = cljs.core.chunk_rest(seq__43590_43604__$1);
var G__43607 = c__4299__auto___43605;
var G__43608 = cljs.core.count(c__4299__auto___43605);
var G__43609 = (0);
seq__43590_43594 = G__43606;
chunk__43591_43595 = G__43607;
count__43592_43596 = G__43608;
i__43593_43597 = G__43609;
continue;
}
} else
{var node_43610 = cljs.core.first(seq__43590_43604__$1);goog.dom.classes.toggle(node_43610,class$);
{
var G__43611 = cljs.core.next(seq__43590_43604__$1);
var G__43612 = null;
var G__43613 = (0);
var G__43614 = (0);
seq__43590_43594 = G__43611;
chunk__43591_43595 = G__43612;
count__43592_43596 = G__43613;
i__43593_43597 = G__43614;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_43623__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__43619_43624 = cljs.core.seq(domina.nodes(content));var chunk__43620_43625 = null;var count__43621_43626 = (0);var i__43622_43627 = (0);while(true){
if((i__43622_43627 < count__43621_43626))
{var node_43628 = chunk__43620_43625.cljs$core$IIndexed$_nth$arity$2(null,i__43622_43627);goog.dom.classes.set(node_43628,classes_43623__$1);
{
var G__43629 = seq__43619_43624;
var G__43630 = chunk__43620_43625;
var G__43631 = count__43621_43626;
var G__43632 = (i__43622_43627 + (1));
seq__43619_43624 = G__43629;
chunk__43620_43625 = G__43630;
count__43621_43626 = G__43631;
i__43622_43627 = G__43632;
continue;
}
} else
{var temp__4126__auto___43633 = cljs.core.seq(seq__43619_43624);if(temp__4126__auto___43633)
{var seq__43619_43634__$1 = temp__4126__auto___43633;if(cljs.core.chunked_seq_QMARK_(seq__43619_43634__$1))
{var c__4299__auto___43635 = cljs.core.chunk_first(seq__43619_43634__$1);{
var G__43636 = cljs.core.chunk_rest(seq__43619_43634__$1);
var G__43637 = c__4299__auto___43635;
var G__43638 = cljs.core.count(c__4299__auto___43635);
var G__43639 = (0);
seq__43619_43624 = G__43636;
chunk__43620_43625 = G__43637;
count__43621_43626 = G__43638;
i__43622_43627 = G__43639;
continue;
}
} else
{var node_43640 = cljs.core.first(seq__43619_43634__$1);goog.dom.classes.set(node_43640,classes_43623__$1);
{
var G__43641 = cljs.core.next(seq__43619_43634__$1);
var G__43642 = null;
var G__43643 = (0);
var G__43644 = (0);
seq__43619_43624 = G__43641;
chunk__43620_43625 = G__43642;
count__43621_43626 = G__43643;
i__43622_43627 = G__43644;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__43649_43653 = cljs.core.seq(domina.nodes(content));var chunk__43650_43654 = null;var count__43651_43655 = (0);var i__43652_43656 = (0);while(true){
if((i__43652_43656 < count__43651_43655))
{var node_43657 = chunk__43650_43654.cljs$core$IIndexed$_nth$arity$2(null,i__43652_43656);goog.dom.setTextContent(node_43657,value);
{
var G__43658 = seq__43649_43653;
var G__43659 = chunk__43650_43654;
var G__43660 = count__43651_43655;
var G__43661 = (i__43652_43656 + (1));
seq__43649_43653 = G__43658;
chunk__43650_43654 = G__43659;
count__43651_43655 = G__43660;
i__43652_43656 = G__43661;
continue;
}
} else
{var temp__4126__auto___43662 = cljs.core.seq(seq__43649_43653);if(temp__4126__auto___43662)
{var seq__43649_43663__$1 = temp__4126__auto___43662;if(cljs.core.chunked_seq_QMARK_(seq__43649_43663__$1))
{var c__4299__auto___43664 = cljs.core.chunk_first(seq__43649_43663__$1);{
var G__43665 = cljs.core.chunk_rest(seq__43649_43663__$1);
var G__43666 = c__4299__auto___43664;
var G__43667 = cljs.core.count(c__4299__auto___43664);
var G__43668 = (0);
seq__43649_43653 = G__43665;
chunk__43650_43654 = G__43666;
count__43651_43655 = G__43667;
i__43652_43656 = G__43668;
continue;
}
} else
{var node_43669 = cljs.core.first(seq__43649_43663__$1);goog.dom.setTextContent(node_43669,value);
{
var G__43670 = cljs.core.next(seq__43649_43663__$1);
var G__43671 = null;
var G__43672 = (0);
var G__43673 = (0);
seq__43649_43653 = G__43670;
chunk__43650_43654 = G__43671;
count__43651_43655 = G__43672;
i__43652_43656 = G__43673;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__43678_43682 = cljs.core.seq(domina.nodes(content));var chunk__43679_43683 = null;var count__43680_43684 = (0);var i__43681_43685 = (0);while(true){
if((i__43681_43685 < count__43680_43684))
{var node_43686 = chunk__43679_43683.cljs$core$IIndexed$_nth$arity$2(null,i__43681_43685);goog.dom.forms.setValue(node_43686,value);
{
var G__43687 = seq__43678_43682;
var G__43688 = chunk__43679_43683;
var G__43689 = count__43680_43684;
var G__43690 = (i__43681_43685 + (1));
seq__43678_43682 = G__43687;
chunk__43679_43683 = G__43688;
count__43680_43684 = G__43689;
i__43681_43685 = G__43690;
continue;
}
} else
{var temp__4126__auto___43691 = cljs.core.seq(seq__43678_43682);if(temp__4126__auto___43691)
{var seq__43678_43692__$1 = temp__4126__auto___43691;if(cljs.core.chunked_seq_QMARK_(seq__43678_43692__$1))
{var c__4299__auto___43693 = cljs.core.chunk_first(seq__43678_43692__$1);{
var G__43694 = cljs.core.chunk_rest(seq__43678_43692__$1);
var G__43695 = c__4299__auto___43693;
var G__43696 = cljs.core.count(c__4299__auto___43693);
var G__43697 = (0);
seq__43678_43682 = G__43694;
chunk__43679_43683 = G__43695;
count__43680_43684 = G__43696;
i__43681_43685 = G__43697;
continue;
}
} else
{var node_43698 = cljs.core.first(seq__43678_43692__$1);goog.dom.forms.setValue(node_43698,value);
{
var G__43699 = cljs.core.next(seq__43678_43692__$1);
var G__43700 = null;
var G__43701 = (0);
var G__43702 = (0);
seq__43678_43682 = G__43699;
chunk__43679_43683 = G__43700;
count__43680_43684 = G__43701;
i__43681_43685 = G__43702;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
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
{var value_43713 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__43709_43714 = cljs.core.seq(domina.nodes(content));var chunk__43710_43715 = null;var count__43711_43716 = (0);var i__43712_43717 = (0);while(true){
if((i__43712_43717 < count__43711_43716))
{var node_43718 = chunk__43710_43715.cljs$core$IIndexed$_nth$arity$2(null,i__43712_43717);node_43718.innerHTML = value_43713;
{
var G__43719 = seq__43709_43714;
var G__43720 = chunk__43710_43715;
var G__43721 = count__43711_43716;
var G__43722 = (i__43712_43717 + (1));
seq__43709_43714 = G__43719;
chunk__43710_43715 = G__43720;
count__43711_43716 = G__43721;
i__43712_43717 = G__43722;
continue;
}
} else
{var temp__4126__auto___43723 = cljs.core.seq(seq__43709_43714);if(temp__4126__auto___43723)
{var seq__43709_43724__$1 = temp__4126__auto___43723;if(cljs.core.chunked_seq_QMARK_(seq__43709_43724__$1))
{var c__4299__auto___43725 = cljs.core.chunk_first(seq__43709_43724__$1);{
var G__43726 = cljs.core.chunk_rest(seq__43709_43724__$1);
var G__43727 = c__4299__auto___43725;
var G__43728 = cljs.core.count(c__4299__auto___43725);
var G__43729 = (0);
seq__43709_43714 = G__43726;
chunk__43710_43715 = G__43727;
count__43711_43716 = G__43728;
i__43712_43717 = G__43729;
continue;
}
} else
{var node_43730 = cljs.core.first(seq__43709_43724__$1);node_43730.innerHTML = value_43713;
{
var G__43731 = cljs.core.next(seq__43709_43724__$1);
var G__43732 = null;
var G__43733 = (0);
var G__43734 = (0);
seq__43709_43714 = G__43731;
chunk__43710_43715 = G__43732;
count__43711_43716 = G__43733;
i__43712_43717 = G__43734;
continue;
}
}
} else
{}
}
break;
}
}catch (e43708){if((e43708 instanceof Error))
{var e_43735 = e43708;domina.replace_children_BANG_(content,value_43713);
} else
{if(cljs.core.constant$keyword$772)
{throw e43708;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__43742_43746 = cljs.core.seq(children);var chunk__43743_43747 = null;var count__43744_43748 = (0);var i__43745_43749 = (0);while(true){
if((i__43745_43749 < count__43744_43748))
{var child_43750 = chunk__43743_43747.cljs$core$IIndexed$_nth$arity$2(null,i__43745_43749);frag.appendChild(child_43750);
{
var G__43751 = seq__43742_43746;
var G__43752 = chunk__43743_43747;
var G__43753 = count__43744_43748;
var G__43754 = (i__43745_43749 + (1));
seq__43742_43746 = G__43751;
chunk__43743_43747 = G__43752;
count__43744_43748 = G__43753;
i__43745_43749 = G__43754;
continue;
}
} else
{var temp__4126__auto___43755 = cljs.core.seq(seq__43742_43746);if(temp__4126__auto___43755)
{var seq__43742_43756__$1 = temp__4126__auto___43755;if(cljs.core.chunked_seq_QMARK_(seq__43742_43756__$1))
{var c__4299__auto___43757 = cljs.core.chunk_first(seq__43742_43756__$1);{
var G__43758 = cljs.core.chunk_rest(seq__43742_43756__$1);
var G__43759 = c__4299__auto___43757;
var G__43760 = cljs.core.count(c__4299__auto___43757);
var G__43761 = (0);
seq__43742_43746 = G__43758;
chunk__43743_43747 = G__43759;
count__43744_43748 = G__43760;
i__43745_43749 = G__43761;
continue;
}
} else
{var child_43762 = cljs.core.first(seq__43742_43756__$1);frag.appendChild(child_43762);
{
var G__43763 = cljs.core.next(seq__43742_43756__$1);
var G__43764 = null;
var G__43765 = (0);
var G__43766 = (0);
seq__43742_43746 = G__43763;
chunk__43743_43747 = G__43764;
count__43744_43748 = G__43765;
i__43745_43749 = G__43766;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__43736_SHARP_,p2__43737_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__43736_SHARP_,p2__43737_SHARP_) : f.call(null,p1__43736_SHARP_,p2__43737_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not(obj.nodeName);if(and__3531__auto____$1)
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
{if((function (){var G__43768 = list_thing;if(G__43768)
{var bit__4193__auto__ = (G__43768.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43768.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43768.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43768);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43768);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$773)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__43769 = content;if(G__43769)
{var bit__4193__auto__ = (G__43769.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43769.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43769.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43769);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43769);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$773)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__43770 = content;if(G__43770)
{var bit__4193__auto__ = (G__43770.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43770.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43770.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43770);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43770);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$773)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
