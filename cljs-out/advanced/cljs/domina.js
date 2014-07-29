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
var opt_wrapper_43423 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_43424 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_43425 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$769,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_43425,opt_wrapper_43423,table_section_wrapper_43424,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_43423,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_43424,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_43424,cell_wrapper_43425,table_section_wrapper_43424,table_section_wrapper_43424]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__43430 = cljs.core.seq(tbody);var chunk__43431 = null;var count__43432 = (0);var i__43433 = (0);while(true){
if((i__43433 < count__43432))
{var child = chunk__43431.cljs$core$IIndexed$_nth$arity$2(null,i__43433);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__43434 = seq__43430;
var G__43435 = chunk__43431;
var G__43436 = count__43432;
var G__43437 = (i__43433 + (1));
seq__43430 = G__43434;
chunk__43431 = G__43435;
count__43432 = G__43436;
i__43433 = G__43437;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43430);if(temp__4126__auto__)
{var seq__43430__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43430__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__43430__$1);{
var G__43438 = cljs.core.chunk_rest(seq__43430__$1);
var G__43439 = c__4299__auto__;
var G__43440 = cljs.core.count(c__4299__auto__);
var G__43441 = (0);
seq__43430 = G__43438;
chunk__43431 = G__43439;
count__43432 = G__43440;
i__43433 = G__43441;
continue;
}
} else
{var child = cljs.core.first(seq__43430__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__43442 = cljs.core.next(seq__43430__$1);
var G__43443 = null;
var G__43444 = (0);
var G__43445 = (0);
seq__43430 = G__43442;
chunk__43431 = G__43443;
count__43432 = G__43444;
i__43433 = G__43445;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__43447 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$769.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43447,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43447,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43447,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__43448 = wrapper.lastChild;
var G__43449 = (level - (1));
wrapper = G__43448;
level = G__43449;
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
domina.DomContent = (function (){var obj43451 = {};return obj43451;
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
log_debug.cljs$lang$applyTo = (function (arglist__43452){
var mesg = cljs.core.seq(arglist__43452);
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
log.cljs$lang$applyTo = (function (arglist__43453){
var mesg = cljs.core.seq(arglist__43453);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__43454){
var contents = cljs.core.seq(arglist__43454);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43455_SHARP_){return p1__43455_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43456_SHARP_,p2__43457_SHARP_){return goog.dom.insertChildAt(p1__43456_SHARP_,p2__43457_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__43456_SHARP_,p2__43457_SHARP_){return goog.dom.insertChildAt(p1__43456_SHARP_,p2__43457_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43459_SHARP_,p2__43458_SHARP_){return goog.dom.insertSiblingBefore(p2__43458_SHARP_,p1__43459_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43459_SHARP_,p2__43458_SHARP_){return goog.dom.insertSiblingBefore(p2__43458_SHARP_,p1__43459_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43461_SHARP_,p2__43460_SHARP_){return goog.dom.insertSiblingAfter(p2__43460_SHARP_,p1__43461_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43461_SHARP_,p2__43460_SHARP_){return goog.dom.insertSiblingAfter(p2__43460_SHARP_,p1__43461_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43463_SHARP_,p2__43462_SHARP_){return goog.dom.replaceNode(p2__43462_SHARP_,p1__43463_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43463_SHARP_,p2__43462_SHARP_){return goog.dom.replaceNode(p2__43462_SHARP_,p1__43463_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__43468_43472 = cljs.core.seq(domina.nodes(content));var chunk__43469_43473 = null;var count__43470_43474 = (0);var i__43471_43475 = (0);while(true){
if((i__43471_43475 < count__43470_43474))
{var n_43476 = chunk__43469_43473.cljs$core$IIndexed$_nth$arity$2(null,i__43471_43475);goog.style.setStyle(n_43476,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43477 = seq__43468_43472;
var G__43478 = chunk__43469_43473;
var G__43479 = count__43470_43474;
var G__43480 = (i__43471_43475 + (1));
seq__43468_43472 = G__43477;
chunk__43469_43473 = G__43478;
count__43470_43474 = G__43479;
i__43471_43475 = G__43480;
continue;
}
} else
{var temp__4126__auto___43481 = cljs.core.seq(seq__43468_43472);if(temp__4126__auto___43481)
{var seq__43468_43482__$1 = temp__4126__auto___43481;if(cljs.core.chunked_seq_QMARK_(seq__43468_43482__$1))
{var c__4299__auto___43483 = cljs.core.chunk_first(seq__43468_43482__$1);{
var G__43484 = cljs.core.chunk_rest(seq__43468_43482__$1);
var G__43485 = c__4299__auto___43483;
var G__43486 = cljs.core.count(c__4299__auto___43483);
var G__43487 = (0);
seq__43468_43472 = G__43484;
chunk__43469_43473 = G__43485;
count__43470_43474 = G__43486;
i__43471_43475 = G__43487;
continue;
}
} else
{var n_43488 = cljs.core.first(seq__43468_43482__$1);goog.style.setStyle(n_43488,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43489 = cljs.core.next(seq__43468_43482__$1);
var G__43490 = null;
var G__43491 = (0);
var G__43492 = (0);
seq__43468_43472 = G__43489;
chunk__43469_43473 = G__43490;
count__43470_43474 = G__43491;
i__43471_43475 = G__43492;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__43493){
var content = cljs.core.first(arglist__43493);
arglist__43493 = cljs.core.next(arglist__43493);
var name = cljs.core.first(arglist__43493);
var value = cljs.core.rest(arglist__43493);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__43498_43502 = cljs.core.seq(domina.nodes(content));var chunk__43499_43503 = null;var count__43500_43504 = (0);var i__43501_43505 = (0);while(true){
if((i__43501_43505 < count__43500_43504))
{var n_43506 = chunk__43499_43503.cljs$core$IIndexed$_nth$arity$2(null,i__43501_43505);n_43506.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43507 = seq__43498_43502;
var G__43508 = chunk__43499_43503;
var G__43509 = count__43500_43504;
var G__43510 = (i__43501_43505 + (1));
seq__43498_43502 = G__43507;
chunk__43499_43503 = G__43508;
count__43500_43504 = G__43509;
i__43501_43505 = G__43510;
continue;
}
} else
{var temp__4126__auto___43511 = cljs.core.seq(seq__43498_43502);if(temp__4126__auto___43511)
{var seq__43498_43512__$1 = temp__4126__auto___43511;if(cljs.core.chunked_seq_QMARK_(seq__43498_43512__$1))
{var c__4299__auto___43513 = cljs.core.chunk_first(seq__43498_43512__$1);{
var G__43514 = cljs.core.chunk_rest(seq__43498_43512__$1);
var G__43515 = c__4299__auto___43513;
var G__43516 = cljs.core.count(c__4299__auto___43513);
var G__43517 = (0);
seq__43498_43502 = G__43514;
chunk__43499_43503 = G__43515;
count__43500_43504 = G__43516;
i__43501_43505 = G__43517;
continue;
}
} else
{var n_43518 = cljs.core.first(seq__43498_43512__$1);n_43518.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43519 = cljs.core.next(seq__43498_43512__$1);
var G__43520 = null;
var G__43521 = (0);
var G__43522 = (0);
seq__43498_43502 = G__43519;
chunk__43499_43503 = G__43520;
count__43500_43504 = G__43521;
i__43501_43505 = G__43522;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__43523){
var content = cljs.core.first(arglist__43523);
arglist__43523 = cljs.core.next(arglist__43523);
var name = cljs.core.first(arglist__43523);
var value = cljs.core.rest(arglist__43523);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__43528_43532 = cljs.core.seq(domina.nodes(content));var chunk__43529_43533 = null;var count__43530_43534 = (0);var i__43531_43535 = (0);while(true){
if((i__43531_43535 < count__43530_43534))
{var n_43536 = chunk__43529_43533.cljs$core$IIndexed$_nth$arity$2(null,i__43531_43535);n_43536.removeAttribute(cljs.core.name(name));
{
var G__43537 = seq__43528_43532;
var G__43538 = chunk__43529_43533;
var G__43539 = count__43530_43534;
var G__43540 = (i__43531_43535 + (1));
seq__43528_43532 = G__43537;
chunk__43529_43533 = G__43538;
count__43530_43534 = G__43539;
i__43531_43535 = G__43540;
continue;
}
} else
{var temp__4126__auto___43541 = cljs.core.seq(seq__43528_43532);if(temp__4126__auto___43541)
{var seq__43528_43542__$1 = temp__4126__auto___43541;if(cljs.core.chunked_seq_QMARK_(seq__43528_43542__$1))
{var c__4299__auto___43543 = cljs.core.chunk_first(seq__43528_43542__$1);{
var G__43544 = cljs.core.chunk_rest(seq__43528_43542__$1);
var G__43545 = c__4299__auto___43543;
var G__43546 = cljs.core.count(c__4299__auto___43543);
var G__43547 = (0);
seq__43528_43532 = G__43544;
chunk__43529_43533 = G__43545;
count__43530_43534 = G__43546;
i__43531_43535 = G__43547;
continue;
}
} else
{var n_43548 = cljs.core.first(seq__43528_43542__$1);n_43548.removeAttribute(cljs.core.name(name));
{
var G__43549 = cljs.core.next(seq__43528_43542__$1);
var G__43550 = null;
var G__43551 = (0);
var G__43552 = (0);
seq__43528_43532 = G__43549;
chunk__43529_43533 = G__43550;
count__43530_43534 = G__43551;
i__43531_43535 = G__43552;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__43554 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43554,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43554,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
{if(cljs.core.constant$keyword$768)
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
return (function (p1__43555_SHARP_){var attr = attrs__$1.item(p1__43555_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__43562_43568 = cljs.core.seq(styles);var chunk__43563_43569 = null;var count__43564_43570 = (0);var i__43565_43571 = (0);while(true){
if((i__43565_43571 < count__43564_43570))
{var vec__43566_43572 = chunk__43563_43569.cljs$core$IIndexed$_nth$arity$2(null,i__43565_43571);var name_43573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43566_43572,(0),null);var value_43574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43566_43572,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43573,cljs.core.array_seq([value_43574], 0));
{
var G__43575 = seq__43562_43568;
var G__43576 = chunk__43563_43569;
var G__43577 = count__43564_43570;
var G__43578 = (i__43565_43571 + (1));
seq__43562_43568 = G__43575;
chunk__43563_43569 = G__43576;
count__43564_43570 = G__43577;
i__43565_43571 = G__43578;
continue;
}
} else
{var temp__4126__auto___43579 = cljs.core.seq(seq__43562_43568);if(temp__4126__auto___43579)
{var seq__43562_43580__$1 = temp__4126__auto___43579;if(cljs.core.chunked_seq_QMARK_(seq__43562_43580__$1))
{var c__4299__auto___43581 = cljs.core.chunk_first(seq__43562_43580__$1);{
var G__43582 = cljs.core.chunk_rest(seq__43562_43580__$1);
var G__43583 = c__4299__auto___43581;
var G__43584 = cljs.core.count(c__4299__auto___43581);
var G__43585 = (0);
seq__43562_43568 = G__43582;
chunk__43563_43569 = G__43583;
count__43564_43570 = G__43584;
i__43565_43571 = G__43585;
continue;
}
} else
{var vec__43567_43586 = cljs.core.first(seq__43562_43580__$1);var name_43587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43567_43586,(0),null);var value_43588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43567_43586,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43587,cljs.core.array_seq([value_43588], 0));
{
var G__43589 = cljs.core.next(seq__43562_43580__$1);
var G__43590 = null;
var G__43591 = (0);
var G__43592 = (0);
seq__43562_43568 = G__43589;
chunk__43563_43569 = G__43590;
count__43564_43570 = G__43591;
i__43565_43571 = G__43592;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__43599_43605 = cljs.core.seq(attrs);var chunk__43600_43606 = null;var count__43601_43607 = (0);var i__43602_43608 = (0);while(true){
if((i__43602_43608 < count__43601_43607))
{var vec__43603_43609 = chunk__43600_43606.cljs$core$IIndexed$_nth$arity$2(null,i__43602_43608);var name_43610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43603_43609,(0),null);var value_43611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43603_43609,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43610,cljs.core.array_seq([value_43611], 0));
{
var G__43612 = seq__43599_43605;
var G__43613 = chunk__43600_43606;
var G__43614 = count__43601_43607;
var G__43615 = (i__43602_43608 + (1));
seq__43599_43605 = G__43612;
chunk__43600_43606 = G__43613;
count__43601_43607 = G__43614;
i__43602_43608 = G__43615;
continue;
}
} else
{var temp__4126__auto___43616 = cljs.core.seq(seq__43599_43605);if(temp__4126__auto___43616)
{var seq__43599_43617__$1 = temp__4126__auto___43616;if(cljs.core.chunked_seq_QMARK_(seq__43599_43617__$1))
{var c__4299__auto___43618 = cljs.core.chunk_first(seq__43599_43617__$1);{
var G__43619 = cljs.core.chunk_rest(seq__43599_43617__$1);
var G__43620 = c__4299__auto___43618;
var G__43621 = cljs.core.count(c__4299__auto___43618);
var G__43622 = (0);
seq__43599_43605 = G__43619;
chunk__43600_43606 = G__43620;
count__43601_43607 = G__43621;
i__43602_43608 = G__43622;
continue;
}
} else
{var vec__43604_43623 = cljs.core.first(seq__43599_43617__$1);var name_43624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43604_43623,(0),null);var value_43625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43604_43623,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43624,cljs.core.array_seq([value_43625], 0));
{
var G__43626 = cljs.core.next(seq__43599_43617__$1);
var G__43627 = null;
var G__43628 = (0);
var G__43629 = (0);
seq__43599_43605 = G__43626;
chunk__43600_43606 = G__43627;
count__43601_43607 = G__43628;
i__43602_43608 = G__43629;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__43634_43638 = cljs.core.seq(domina.nodes(content));var chunk__43635_43639 = null;var count__43636_43640 = (0);var i__43637_43641 = (0);while(true){
if((i__43637_43641 < count__43636_43640))
{var node_43642 = chunk__43635_43639.cljs$core$IIndexed$_nth$arity$2(null,i__43637_43641);goog.dom.classes.add(node_43642,class$);
{
var G__43643 = seq__43634_43638;
var G__43644 = chunk__43635_43639;
var G__43645 = count__43636_43640;
var G__43646 = (i__43637_43641 + (1));
seq__43634_43638 = G__43643;
chunk__43635_43639 = G__43644;
count__43636_43640 = G__43645;
i__43637_43641 = G__43646;
continue;
}
} else
{var temp__4126__auto___43647 = cljs.core.seq(seq__43634_43638);if(temp__4126__auto___43647)
{var seq__43634_43648__$1 = temp__4126__auto___43647;if(cljs.core.chunked_seq_QMARK_(seq__43634_43648__$1))
{var c__4299__auto___43649 = cljs.core.chunk_first(seq__43634_43648__$1);{
var G__43650 = cljs.core.chunk_rest(seq__43634_43648__$1);
var G__43651 = c__4299__auto___43649;
var G__43652 = cljs.core.count(c__4299__auto___43649);
var G__43653 = (0);
seq__43634_43638 = G__43650;
chunk__43635_43639 = G__43651;
count__43636_43640 = G__43652;
i__43637_43641 = G__43653;
continue;
}
} else
{var node_43654 = cljs.core.first(seq__43634_43648__$1);goog.dom.classes.add(node_43654,class$);
{
var G__43655 = cljs.core.next(seq__43634_43648__$1);
var G__43656 = null;
var G__43657 = (0);
var G__43658 = (0);
seq__43634_43638 = G__43655;
chunk__43635_43639 = G__43656;
count__43636_43640 = G__43657;
i__43637_43641 = G__43658;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__43663_43667 = cljs.core.seq(domina.nodes(content));var chunk__43664_43668 = null;var count__43665_43669 = (0);var i__43666_43670 = (0);while(true){
if((i__43666_43670 < count__43665_43669))
{var node_43671 = chunk__43664_43668.cljs$core$IIndexed$_nth$arity$2(null,i__43666_43670);goog.dom.classes.remove(node_43671,class$);
{
var G__43672 = seq__43663_43667;
var G__43673 = chunk__43664_43668;
var G__43674 = count__43665_43669;
var G__43675 = (i__43666_43670 + (1));
seq__43663_43667 = G__43672;
chunk__43664_43668 = G__43673;
count__43665_43669 = G__43674;
i__43666_43670 = G__43675;
continue;
}
} else
{var temp__4126__auto___43676 = cljs.core.seq(seq__43663_43667);if(temp__4126__auto___43676)
{var seq__43663_43677__$1 = temp__4126__auto___43676;if(cljs.core.chunked_seq_QMARK_(seq__43663_43677__$1))
{var c__4299__auto___43678 = cljs.core.chunk_first(seq__43663_43677__$1);{
var G__43679 = cljs.core.chunk_rest(seq__43663_43677__$1);
var G__43680 = c__4299__auto___43678;
var G__43681 = cljs.core.count(c__4299__auto___43678);
var G__43682 = (0);
seq__43663_43667 = G__43679;
chunk__43664_43668 = G__43680;
count__43665_43669 = G__43681;
i__43666_43670 = G__43682;
continue;
}
} else
{var node_43683 = cljs.core.first(seq__43663_43677__$1);goog.dom.classes.remove(node_43683,class$);
{
var G__43684 = cljs.core.next(seq__43663_43677__$1);
var G__43685 = null;
var G__43686 = (0);
var G__43687 = (0);
seq__43663_43667 = G__43684;
chunk__43664_43668 = G__43685;
count__43665_43669 = G__43686;
i__43666_43670 = G__43687;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__43692_43696 = cljs.core.seq(domina.nodes(content));var chunk__43693_43697 = null;var count__43694_43698 = (0);var i__43695_43699 = (0);while(true){
if((i__43695_43699 < count__43694_43698))
{var node_43700 = chunk__43693_43697.cljs$core$IIndexed$_nth$arity$2(null,i__43695_43699);goog.dom.classes.toggle(node_43700,class$);
{
var G__43701 = seq__43692_43696;
var G__43702 = chunk__43693_43697;
var G__43703 = count__43694_43698;
var G__43704 = (i__43695_43699 + (1));
seq__43692_43696 = G__43701;
chunk__43693_43697 = G__43702;
count__43694_43698 = G__43703;
i__43695_43699 = G__43704;
continue;
}
} else
{var temp__4126__auto___43705 = cljs.core.seq(seq__43692_43696);if(temp__4126__auto___43705)
{var seq__43692_43706__$1 = temp__4126__auto___43705;if(cljs.core.chunked_seq_QMARK_(seq__43692_43706__$1))
{var c__4299__auto___43707 = cljs.core.chunk_first(seq__43692_43706__$1);{
var G__43708 = cljs.core.chunk_rest(seq__43692_43706__$1);
var G__43709 = c__4299__auto___43707;
var G__43710 = cljs.core.count(c__4299__auto___43707);
var G__43711 = (0);
seq__43692_43696 = G__43708;
chunk__43693_43697 = G__43709;
count__43694_43698 = G__43710;
i__43695_43699 = G__43711;
continue;
}
} else
{var node_43712 = cljs.core.first(seq__43692_43706__$1);goog.dom.classes.toggle(node_43712,class$);
{
var G__43713 = cljs.core.next(seq__43692_43706__$1);
var G__43714 = null;
var G__43715 = (0);
var G__43716 = (0);
seq__43692_43696 = G__43713;
chunk__43693_43697 = G__43714;
count__43694_43698 = G__43715;
i__43695_43699 = G__43716;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_43725__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__43721_43726 = cljs.core.seq(domina.nodes(content));var chunk__43722_43727 = null;var count__43723_43728 = (0);var i__43724_43729 = (0);while(true){
if((i__43724_43729 < count__43723_43728))
{var node_43730 = chunk__43722_43727.cljs$core$IIndexed$_nth$arity$2(null,i__43724_43729);goog.dom.classes.set(node_43730,classes_43725__$1);
{
var G__43731 = seq__43721_43726;
var G__43732 = chunk__43722_43727;
var G__43733 = count__43723_43728;
var G__43734 = (i__43724_43729 + (1));
seq__43721_43726 = G__43731;
chunk__43722_43727 = G__43732;
count__43723_43728 = G__43733;
i__43724_43729 = G__43734;
continue;
}
} else
{var temp__4126__auto___43735 = cljs.core.seq(seq__43721_43726);if(temp__4126__auto___43735)
{var seq__43721_43736__$1 = temp__4126__auto___43735;if(cljs.core.chunked_seq_QMARK_(seq__43721_43736__$1))
{var c__4299__auto___43737 = cljs.core.chunk_first(seq__43721_43736__$1);{
var G__43738 = cljs.core.chunk_rest(seq__43721_43736__$1);
var G__43739 = c__4299__auto___43737;
var G__43740 = cljs.core.count(c__4299__auto___43737);
var G__43741 = (0);
seq__43721_43726 = G__43738;
chunk__43722_43727 = G__43739;
count__43723_43728 = G__43740;
i__43724_43729 = G__43741;
continue;
}
} else
{var node_43742 = cljs.core.first(seq__43721_43736__$1);goog.dom.classes.set(node_43742,classes_43725__$1);
{
var G__43743 = cljs.core.next(seq__43721_43736__$1);
var G__43744 = null;
var G__43745 = (0);
var G__43746 = (0);
seq__43721_43726 = G__43743;
chunk__43722_43727 = G__43744;
count__43723_43728 = G__43745;
i__43724_43729 = G__43746;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__43751_43755 = cljs.core.seq(domina.nodes(content));var chunk__43752_43756 = null;var count__43753_43757 = (0);var i__43754_43758 = (0);while(true){
if((i__43754_43758 < count__43753_43757))
{var node_43759 = chunk__43752_43756.cljs$core$IIndexed$_nth$arity$2(null,i__43754_43758);goog.dom.setTextContent(node_43759,value);
{
var G__43760 = seq__43751_43755;
var G__43761 = chunk__43752_43756;
var G__43762 = count__43753_43757;
var G__43763 = (i__43754_43758 + (1));
seq__43751_43755 = G__43760;
chunk__43752_43756 = G__43761;
count__43753_43757 = G__43762;
i__43754_43758 = G__43763;
continue;
}
} else
{var temp__4126__auto___43764 = cljs.core.seq(seq__43751_43755);if(temp__4126__auto___43764)
{var seq__43751_43765__$1 = temp__4126__auto___43764;if(cljs.core.chunked_seq_QMARK_(seq__43751_43765__$1))
{var c__4299__auto___43766 = cljs.core.chunk_first(seq__43751_43765__$1);{
var G__43767 = cljs.core.chunk_rest(seq__43751_43765__$1);
var G__43768 = c__4299__auto___43766;
var G__43769 = cljs.core.count(c__4299__auto___43766);
var G__43770 = (0);
seq__43751_43755 = G__43767;
chunk__43752_43756 = G__43768;
count__43753_43757 = G__43769;
i__43754_43758 = G__43770;
continue;
}
} else
{var node_43771 = cljs.core.first(seq__43751_43765__$1);goog.dom.setTextContent(node_43771,value);
{
var G__43772 = cljs.core.next(seq__43751_43765__$1);
var G__43773 = null;
var G__43774 = (0);
var G__43775 = (0);
seq__43751_43755 = G__43772;
chunk__43752_43756 = G__43773;
count__43753_43757 = G__43774;
i__43754_43758 = G__43775;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__43780_43784 = cljs.core.seq(domina.nodes(content));var chunk__43781_43785 = null;var count__43782_43786 = (0);var i__43783_43787 = (0);while(true){
if((i__43783_43787 < count__43782_43786))
{var node_43788 = chunk__43781_43785.cljs$core$IIndexed$_nth$arity$2(null,i__43783_43787);goog.dom.forms.setValue(node_43788,value);
{
var G__43789 = seq__43780_43784;
var G__43790 = chunk__43781_43785;
var G__43791 = count__43782_43786;
var G__43792 = (i__43783_43787 + (1));
seq__43780_43784 = G__43789;
chunk__43781_43785 = G__43790;
count__43782_43786 = G__43791;
i__43783_43787 = G__43792;
continue;
}
} else
{var temp__4126__auto___43793 = cljs.core.seq(seq__43780_43784);if(temp__4126__auto___43793)
{var seq__43780_43794__$1 = temp__4126__auto___43793;if(cljs.core.chunked_seq_QMARK_(seq__43780_43794__$1))
{var c__4299__auto___43795 = cljs.core.chunk_first(seq__43780_43794__$1);{
var G__43796 = cljs.core.chunk_rest(seq__43780_43794__$1);
var G__43797 = c__4299__auto___43795;
var G__43798 = cljs.core.count(c__4299__auto___43795);
var G__43799 = (0);
seq__43780_43784 = G__43796;
chunk__43781_43785 = G__43797;
count__43782_43786 = G__43798;
i__43783_43787 = G__43799;
continue;
}
} else
{var node_43800 = cljs.core.first(seq__43780_43794__$1);goog.dom.forms.setValue(node_43800,value);
{
var G__43801 = cljs.core.next(seq__43780_43794__$1);
var G__43802 = null;
var G__43803 = (0);
var G__43804 = (0);
seq__43780_43784 = G__43801;
chunk__43781_43785 = G__43802;
count__43782_43786 = G__43803;
i__43783_43787 = G__43804;
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
{var value_43815 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__43811_43816 = cljs.core.seq(domina.nodes(content));var chunk__43812_43817 = null;var count__43813_43818 = (0);var i__43814_43819 = (0);while(true){
if((i__43814_43819 < count__43813_43818))
{var node_43820 = chunk__43812_43817.cljs$core$IIndexed$_nth$arity$2(null,i__43814_43819);node_43820.innerHTML = value_43815;
{
var G__43821 = seq__43811_43816;
var G__43822 = chunk__43812_43817;
var G__43823 = count__43813_43818;
var G__43824 = (i__43814_43819 + (1));
seq__43811_43816 = G__43821;
chunk__43812_43817 = G__43822;
count__43813_43818 = G__43823;
i__43814_43819 = G__43824;
continue;
}
} else
{var temp__4126__auto___43825 = cljs.core.seq(seq__43811_43816);if(temp__4126__auto___43825)
{var seq__43811_43826__$1 = temp__4126__auto___43825;if(cljs.core.chunked_seq_QMARK_(seq__43811_43826__$1))
{var c__4299__auto___43827 = cljs.core.chunk_first(seq__43811_43826__$1);{
var G__43828 = cljs.core.chunk_rest(seq__43811_43826__$1);
var G__43829 = c__4299__auto___43827;
var G__43830 = cljs.core.count(c__4299__auto___43827);
var G__43831 = (0);
seq__43811_43816 = G__43828;
chunk__43812_43817 = G__43829;
count__43813_43818 = G__43830;
i__43814_43819 = G__43831;
continue;
}
} else
{var node_43832 = cljs.core.first(seq__43811_43826__$1);node_43832.innerHTML = value_43815;
{
var G__43833 = cljs.core.next(seq__43811_43826__$1);
var G__43834 = null;
var G__43835 = (0);
var G__43836 = (0);
seq__43811_43816 = G__43833;
chunk__43812_43817 = G__43834;
count__43813_43818 = G__43835;
i__43814_43819 = G__43836;
continue;
}
}
} else
{}
}
break;
}
}catch (e43810){if((e43810 instanceof Error))
{var e_43837 = e43810;domina.replace_children_BANG_(content,value_43815);
} else
{if(cljs.core.constant$keyword$768)
{throw e43810;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__43844_43848 = cljs.core.seq(children);var chunk__43845_43849 = null;var count__43846_43850 = (0);var i__43847_43851 = (0);while(true){
if((i__43847_43851 < count__43846_43850))
{var child_43852 = chunk__43845_43849.cljs$core$IIndexed$_nth$arity$2(null,i__43847_43851);frag.appendChild(child_43852);
{
var G__43853 = seq__43844_43848;
var G__43854 = chunk__43845_43849;
var G__43855 = count__43846_43850;
var G__43856 = (i__43847_43851 + (1));
seq__43844_43848 = G__43853;
chunk__43845_43849 = G__43854;
count__43846_43850 = G__43855;
i__43847_43851 = G__43856;
continue;
}
} else
{var temp__4126__auto___43857 = cljs.core.seq(seq__43844_43848);if(temp__4126__auto___43857)
{var seq__43844_43858__$1 = temp__4126__auto___43857;if(cljs.core.chunked_seq_QMARK_(seq__43844_43858__$1))
{var c__4299__auto___43859 = cljs.core.chunk_first(seq__43844_43858__$1);{
var G__43860 = cljs.core.chunk_rest(seq__43844_43858__$1);
var G__43861 = c__4299__auto___43859;
var G__43862 = cljs.core.count(c__4299__auto___43859);
var G__43863 = (0);
seq__43844_43848 = G__43860;
chunk__43845_43849 = G__43861;
count__43846_43850 = G__43862;
i__43847_43851 = G__43863;
continue;
}
} else
{var child_43864 = cljs.core.first(seq__43844_43858__$1);frag.appendChild(child_43864);
{
var G__43865 = cljs.core.next(seq__43844_43858__$1);
var G__43866 = null;
var G__43867 = (0);
var G__43868 = (0);
seq__43844_43848 = G__43865;
chunk__43845_43849 = G__43866;
count__43846_43850 = G__43867;
i__43847_43851 = G__43868;
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
return (function (p1__43838_SHARP_,p2__43839_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__43838_SHARP_,p2__43839_SHARP_) : f.call(null,p1__43838_SHARP_,p2__43839_SHARP_));
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
{if((function (){var G__43870 = list_thing;if(G__43870)
{var bit__4193__auto__ = (G__43870.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43870.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43870.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43870);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43870);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$769)
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
{if((function (){var G__43871 = content;if(G__43871)
{var bit__4193__auto__ = (G__43871.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43871.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43871.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43871);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43871);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$769)
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
{if((function (){var G__43872 = content;if(G__43872)
{var bit__4193__auto__ = (G__43872.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__43872.cljs$core$ISeqable$))
{return true;
} else
{if((!G__43872.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43872);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__43872);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$769)
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
