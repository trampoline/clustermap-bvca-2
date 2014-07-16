// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_42430 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_42431 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_42432 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$759,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_42432,opt_wrapper_42430,table_section_wrapper_42431,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_42430,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_42431,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_42431,cell_wrapper_42432,table_section_wrapper_42431,table_section_wrapper_42431]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__42437 = cljs.core.seq(tbody);var chunk__42438 = null;var count__42439 = (0);var i__42440 = (0);while(true){
if((i__42440 < count__42439))
{var child = chunk__42438.cljs$core$IIndexed$_nth$arity$2(null,i__42440);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__42441 = seq__42437;
var G__42442 = chunk__42438;
var G__42443 = count__42439;
var G__42444 = (i__42440 + (1));
seq__42437 = G__42441;
chunk__42438 = G__42442;
count__42439 = G__42443;
i__42440 = G__42444;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__42437);if(temp__4126__auto__)
{var seq__42437__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__42437__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__42437__$1);{
var G__42445 = cljs.core.chunk_rest(seq__42437__$1);
var G__42446 = c__4299__auto__;
var G__42447 = cljs.core.count(c__4299__auto__);
var G__42448 = (0);
seq__42437 = G__42445;
chunk__42438 = G__42446;
count__42439 = G__42447;
i__42440 = G__42448;
continue;
}
} else
{var child = cljs.core.first(seq__42437__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__42449 = cljs.core.next(seq__42437__$1);
var G__42450 = null;
var G__42451 = (0);
var G__42452 = (0);
seq__42437 = G__42449;
chunk__42438 = G__42450;
count__42439 = G__42451;
i__42440 = G__42452;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__42454 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$759.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42454,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__42455 = wrapper.lastChild;
var G__42456 = (level - (1));
wrapper = G__42455;
level = G__42456;
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
domina.DomContent = (function (){var obj42458 = {};return obj42458;
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
log_debug.cljs$lang$applyTo = (function (arglist__42459){
var mesg = cljs.core.seq(arglist__42459);
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
log.cljs$lang$applyTo = (function (arglist__42460){
var mesg = cljs.core.seq(arglist__42460);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__42461){
var contents = cljs.core.seq(arglist__42461);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42462_SHARP_){return p1__42462_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42463_SHARP_,p2__42464_SHARP_){return goog.dom.insertChildAt(p1__42463_SHARP_,p2__42464_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__42463_SHARP_,p2__42464_SHARP_){return goog.dom.insertChildAt(p1__42463_SHARP_,p2__42464_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42466_SHARP_,p2__42465_SHARP_){return goog.dom.insertSiblingBefore(p2__42465_SHARP_,p1__42466_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42466_SHARP_,p2__42465_SHARP_){return goog.dom.insertSiblingBefore(p2__42465_SHARP_,p1__42466_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42468_SHARP_,p2__42467_SHARP_){return goog.dom.insertSiblingAfter(p2__42467_SHARP_,p1__42468_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42468_SHARP_,p2__42467_SHARP_){return goog.dom.insertSiblingAfter(p2__42467_SHARP_,p1__42468_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__42470_SHARP_,p2__42469_SHARP_){return goog.dom.replaceNode(p2__42469_SHARP_,p1__42470_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__42470_SHARP_,p2__42469_SHARP_){return goog.dom.replaceNode(p2__42469_SHARP_,p1__42470_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__42475_42479 = cljs.core.seq(domina.nodes(content));var chunk__42476_42480 = null;var count__42477_42481 = (0);var i__42478_42482 = (0);while(true){
if((i__42478_42482 < count__42477_42481))
{var n_42483 = chunk__42476_42480.cljs$core$IIndexed$_nth$arity$2(null,i__42478_42482);goog.style.setStyle(n_42483,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42484 = seq__42475_42479;
var G__42485 = chunk__42476_42480;
var G__42486 = count__42477_42481;
var G__42487 = (i__42478_42482 + (1));
seq__42475_42479 = G__42484;
chunk__42476_42480 = G__42485;
count__42477_42481 = G__42486;
i__42478_42482 = G__42487;
continue;
}
} else
{var temp__4126__auto___42488 = cljs.core.seq(seq__42475_42479);if(temp__4126__auto___42488)
{var seq__42475_42489__$1 = temp__4126__auto___42488;if(cljs.core.chunked_seq_QMARK_(seq__42475_42489__$1))
{var c__4299__auto___42490 = cljs.core.chunk_first(seq__42475_42489__$1);{
var G__42491 = cljs.core.chunk_rest(seq__42475_42489__$1);
var G__42492 = c__4299__auto___42490;
var G__42493 = cljs.core.count(c__4299__auto___42490);
var G__42494 = (0);
seq__42475_42479 = G__42491;
chunk__42476_42480 = G__42492;
count__42477_42481 = G__42493;
i__42478_42482 = G__42494;
continue;
}
} else
{var n_42495 = cljs.core.first(seq__42475_42489__$1);goog.style.setStyle(n_42495,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42496 = cljs.core.next(seq__42475_42489__$1);
var G__42497 = null;
var G__42498 = (0);
var G__42499 = (0);
seq__42475_42479 = G__42496;
chunk__42476_42480 = G__42497;
count__42477_42481 = G__42498;
i__42478_42482 = G__42499;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__42500){
var content = cljs.core.first(arglist__42500);
arglist__42500 = cljs.core.next(arglist__42500);
var name = cljs.core.first(arglist__42500);
var value = cljs.core.rest(arglist__42500);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__42505_42509 = cljs.core.seq(domina.nodes(content));var chunk__42506_42510 = null;var count__42507_42511 = (0);var i__42508_42512 = (0);while(true){
if((i__42508_42512 < count__42507_42511))
{var n_42513 = chunk__42506_42510.cljs$core$IIndexed$_nth$arity$2(null,i__42508_42512);n_42513.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42514 = seq__42505_42509;
var G__42515 = chunk__42506_42510;
var G__42516 = count__42507_42511;
var G__42517 = (i__42508_42512 + (1));
seq__42505_42509 = G__42514;
chunk__42506_42510 = G__42515;
count__42507_42511 = G__42516;
i__42508_42512 = G__42517;
continue;
}
} else
{var temp__4126__auto___42518 = cljs.core.seq(seq__42505_42509);if(temp__4126__auto___42518)
{var seq__42505_42519__$1 = temp__4126__auto___42518;if(cljs.core.chunked_seq_QMARK_(seq__42505_42519__$1))
{var c__4299__auto___42520 = cljs.core.chunk_first(seq__42505_42519__$1);{
var G__42521 = cljs.core.chunk_rest(seq__42505_42519__$1);
var G__42522 = c__4299__auto___42520;
var G__42523 = cljs.core.count(c__4299__auto___42520);
var G__42524 = (0);
seq__42505_42509 = G__42521;
chunk__42506_42510 = G__42522;
count__42507_42511 = G__42523;
i__42508_42512 = G__42524;
continue;
}
} else
{var n_42525 = cljs.core.first(seq__42505_42519__$1);n_42525.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__42526 = cljs.core.next(seq__42505_42519__$1);
var G__42527 = null;
var G__42528 = (0);
var G__42529 = (0);
seq__42505_42509 = G__42526;
chunk__42506_42510 = G__42527;
count__42507_42511 = G__42528;
i__42508_42512 = G__42529;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__42530){
var content = cljs.core.first(arglist__42530);
arglist__42530 = cljs.core.next(arglist__42530);
var name = cljs.core.first(arglist__42530);
var value = cljs.core.rest(arglist__42530);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__42535_42539 = cljs.core.seq(domina.nodes(content));var chunk__42536_42540 = null;var count__42537_42541 = (0);var i__42538_42542 = (0);while(true){
if((i__42538_42542 < count__42537_42541))
{var n_42543 = chunk__42536_42540.cljs$core$IIndexed$_nth$arity$2(null,i__42538_42542);n_42543.removeAttribute(cljs.core.name(name));
{
var G__42544 = seq__42535_42539;
var G__42545 = chunk__42536_42540;
var G__42546 = count__42537_42541;
var G__42547 = (i__42538_42542 + (1));
seq__42535_42539 = G__42544;
chunk__42536_42540 = G__42545;
count__42537_42541 = G__42546;
i__42538_42542 = G__42547;
continue;
}
} else
{var temp__4126__auto___42548 = cljs.core.seq(seq__42535_42539);if(temp__4126__auto___42548)
{var seq__42535_42549__$1 = temp__4126__auto___42548;if(cljs.core.chunked_seq_QMARK_(seq__42535_42549__$1))
{var c__4299__auto___42550 = cljs.core.chunk_first(seq__42535_42549__$1);{
var G__42551 = cljs.core.chunk_rest(seq__42535_42549__$1);
var G__42552 = c__4299__auto___42550;
var G__42553 = cljs.core.count(c__4299__auto___42550);
var G__42554 = (0);
seq__42535_42539 = G__42551;
chunk__42536_42540 = G__42552;
count__42537_42541 = G__42553;
i__42538_42542 = G__42554;
continue;
}
} else
{var n_42555 = cljs.core.first(seq__42535_42549__$1);n_42555.removeAttribute(cljs.core.name(name));
{
var G__42556 = cljs.core.next(seq__42535_42549__$1);
var G__42557 = null;
var G__42558 = (0);
var G__42559 = (0);
seq__42535_42539 = G__42556;
chunk__42536_42540 = G__42557;
count__42537_42541 = G__42558;
i__42538_42542 = G__42559;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__42561 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42561,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
{if(cljs.core.constant$keyword$758)
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
return (function (p1__42562_SHARP_){var attr = attrs__$1.item(p1__42562_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__42569_42575 = cljs.core.seq(styles);var chunk__42570_42576 = null;var count__42571_42577 = (0);var i__42572_42578 = (0);while(true){
if((i__42572_42578 < count__42571_42577))
{var vec__42573_42579 = chunk__42570_42576.cljs$core$IIndexed$_nth$arity$2(null,i__42572_42578);var name_42580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573_42579,(0),null);var value_42581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42573_42579,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42580,cljs.core.array_seq([value_42581], 0));
{
var G__42582 = seq__42569_42575;
var G__42583 = chunk__42570_42576;
var G__42584 = count__42571_42577;
var G__42585 = (i__42572_42578 + (1));
seq__42569_42575 = G__42582;
chunk__42570_42576 = G__42583;
count__42571_42577 = G__42584;
i__42572_42578 = G__42585;
continue;
}
} else
{var temp__4126__auto___42586 = cljs.core.seq(seq__42569_42575);if(temp__4126__auto___42586)
{var seq__42569_42587__$1 = temp__4126__auto___42586;if(cljs.core.chunked_seq_QMARK_(seq__42569_42587__$1))
{var c__4299__auto___42588 = cljs.core.chunk_first(seq__42569_42587__$1);{
var G__42589 = cljs.core.chunk_rest(seq__42569_42587__$1);
var G__42590 = c__4299__auto___42588;
var G__42591 = cljs.core.count(c__4299__auto___42588);
var G__42592 = (0);
seq__42569_42575 = G__42589;
chunk__42570_42576 = G__42590;
count__42571_42577 = G__42591;
i__42572_42578 = G__42592;
continue;
}
} else
{var vec__42574_42593 = cljs.core.first(seq__42569_42587__$1);var name_42594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42574_42593,(0),null);var value_42595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42574_42593,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42594,cljs.core.array_seq([value_42595], 0));
{
var G__42596 = cljs.core.next(seq__42569_42587__$1);
var G__42597 = null;
var G__42598 = (0);
var G__42599 = (0);
seq__42569_42575 = G__42596;
chunk__42570_42576 = G__42597;
count__42571_42577 = G__42598;
i__42572_42578 = G__42599;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__42606_42612 = cljs.core.seq(attrs);var chunk__42607_42613 = null;var count__42608_42614 = (0);var i__42609_42615 = (0);while(true){
if((i__42609_42615 < count__42608_42614))
{var vec__42610_42616 = chunk__42607_42613.cljs$core$IIndexed$_nth$arity$2(null,i__42609_42615);var name_42617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42610_42616,(0),null);var value_42618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42610_42616,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42617,cljs.core.array_seq([value_42618], 0));
{
var G__42619 = seq__42606_42612;
var G__42620 = chunk__42607_42613;
var G__42621 = count__42608_42614;
var G__42622 = (i__42609_42615 + (1));
seq__42606_42612 = G__42619;
chunk__42607_42613 = G__42620;
count__42608_42614 = G__42621;
i__42609_42615 = G__42622;
continue;
}
} else
{var temp__4126__auto___42623 = cljs.core.seq(seq__42606_42612);if(temp__4126__auto___42623)
{var seq__42606_42624__$1 = temp__4126__auto___42623;if(cljs.core.chunked_seq_QMARK_(seq__42606_42624__$1))
{var c__4299__auto___42625 = cljs.core.chunk_first(seq__42606_42624__$1);{
var G__42626 = cljs.core.chunk_rest(seq__42606_42624__$1);
var G__42627 = c__4299__auto___42625;
var G__42628 = cljs.core.count(c__4299__auto___42625);
var G__42629 = (0);
seq__42606_42612 = G__42626;
chunk__42607_42613 = G__42627;
count__42608_42614 = G__42628;
i__42609_42615 = G__42629;
continue;
}
} else
{var vec__42611_42630 = cljs.core.first(seq__42606_42624__$1);var name_42631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42611_42630,(0),null);var value_42632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42611_42630,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_42631,cljs.core.array_seq([value_42632], 0));
{
var G__42633 = cljs.core.next(seq__42606_42624__$1);
var G__42634 = null;
var G__42635 = (0);
var G__42636 = (0);
seq__42606_42612 = G__42633;
chunk__42607_42613 = G__42634;
count__42608_42614 = G__42635;
i__42609_42615 = G__42636;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__42641_42645 = cljs.core.seq(domina.nodes(content));var chunk__42642_42646 = null;var count__42643_42647 = (0);var i__42644_42648 = (0);while(true){
if((i__42644_42648 < count__42643_42647))
{var node_42649 = chunk__42642_42646.cljs$core$IIndexed$_nth$arity$2(null,i__42644_42648);goog.dom.classes.add(node_42649,class$);
{
var G__42650 = seq__42641_42645;
var G__42651 = chunk__42642_42646;
var G__42652 = count__42643_42647;
var G__42653 = (i__42644_42648 + (1));
seq__42641_42645 = G__42650;
chunk__42642_42646 = G__42651;
count__42643_42647 = G__42652;
i__42644_42648 = G__42653;
continue;
}
} else
{var temp__4126__auto___42654 = cljs.core.seq(seq__42641_42645);if(temp__4126__auto___42654)
{var seq__42641_42655__$1 = temp__4126__auto___42654;if(cljs.core.chunked_seq_QMARK_(seq__42641_42655__$1))
{var c__4299__auto___42656 = cljs.core.chunk_first(seq__42641_42655__$1);{
var G__42657 = cljs.core.chunk_rest(seq__42641_42655__$1);
var G__42658 = c__4299__auto___42656;
var G__42659 = cljs.core.count(c__4299__auto___42656);
var G__42660 = (0);
seq__42641_42645 = G__42657;
chunk__42642_42646 = G__42658;
count__42643_42647 = G__42659;
i__42644_42648 = G__42660;
continue;
}
} else
{var node_42661 = cljs.core.first(seq__42641_42655__$1);goog.dom.classes.add(node_42661,class$);
{
var G__42662 = cljs.core.next(seq__42641_42655__$1);
var G__42663 = null;
var G__42664 = (0);
var G__42665 = (0);
seq__42641_42645 = G__42662;
chunk__42642_42646 = G__42663;
count__42643_42647 = G__42664;
i__42644_42648 = G__42665;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__42670_42674 = cljs.core.seq(domina.nodes(content));var chunk__42671_42675 = null;var count__42672_42676 = (0);var i__42673_42677 = (0);while(true){
if((i__42673_42677 < count__42672_42676))
{var node_42678 = chunk__42671_42675.cljs$core$IIndexed$_nth$arity$2(null,i__42673_42677);goog.dom.classes.remove(node_42678,class$);
{
var G__42679 = seq__42670_42674;
var G__42680 = chunk__42671_42675;
var G__42681 = count__42672_42676;
var G__42682 = (i__42673_42677 + (1));
seq__42670_42674 = G__42679;
chunk__42671_42675 = G__42680;
count__42672_42676 = G__42681;
i__42673_42677 = G__42682;
continue;
}
} else
{var temp__4126__auto___42683 = cljs.core.seq(seq__42670_42674);if(temp__4126__auto___42683)
{var seq__42670_42684__$1 = temp__4126__auto___42683;if(cljs.core.chunked_seq_QMARK_(seq__42670_42684__$1))
{var c__4299__auto___42685 = cljs.core.chunk_first(seq__42670_42684__$1);{
var G__42686 = cljs.core.chunk_rest(seq__42670_42684__$1);
var G__42687 = c__4299__auto___42685;
var G__42688 = cljs.core.count(c__4299__auto___42685);
var G__42689 = (0);
seq__42670_42674 = G__42686;
chunk__42671_42675 = G__42687;
count__42672_42676 = G__42688;
i__42673_42677 = G__42689;
continue;
}
} else
{var node_42690 = cljs.core.first(seq__42670_42684__$1);goog.dom.classes.remove(node_42690,class$);
{
var G__42691 = cljs.core.next(seq__42670_42684__$1);
var G__42692 = null;
var G__42693 = (0);
var G__42694 = (0);
seq__42670_42674 = G__42691;
chunk__42671_42675 = G__42692;
count__42672_42676 = G__42693;
i__42673_42677 = G__42694;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__42699_42703 = cljs.core.seq(domina.nodes(content));var chunk__42700_42704 = null;var count__42701_42705 = (0);var i__42702_42706 = (0);while(true){
if((i__42702_42706 < count__42701_42705))
{var node_42707 = chunk__42700_42704.cljs$core$IIndexed$_nth$arity$2(null,i__42702_42706);goog.dom.classes.toggle(node_42707,class$);
{
var G__42708 = seq__42699_42703;
var G__42709 = chunk__42700_42704;
var G__42710 = count__42701_42705;
var G__42711 = (i__42702_42706 + (1));
seq__42699_42703 = G__42708;
chunk__42700_42704 = G__42709;
count__42701_42705 = G__42710;
i__42702_42706 = G__42711;
continue;
}
} else
{var temp__4126__auto___42712 = cljs.core.seq(seq__42699_42703);if(temp__4126__auto___42712)
{var seq__42699_42713__$1 = temp__4126__auto___42712;if(cljs.core.chunked_seq_QMARK_(seq__42699_42713__$1))
{var c__4299__auto___42714 = cljs.core.chunk_first(seq__42699_42713__$1);{
var G__42715 = cljs.core.chunk_rest(seq__42699_42713__$1);
var G__42716 = c__4299__auto___42714;
var G__42717 = cljs.core.count(c__4299__auto___42714);
var G__42718 = (0);
seq__42699_42703 = G__42715;
chunk__42700_42704 = G__42716;
count__42701_42705 = G__42717;
i__42702_42706 = G__42718;
continue;
}
} else
{var node_42719 = cljs.core.first(seq__42699_42713__$1);goog.dom.classes.toggle(node_42719,class$);
{
var G__42720 = cljs.core.next(seq__42699_42713__$1);
var G__42721 = null;
var G__42722 = (0);
var G__42723 = (0);
seq__42699_42703 = G__42720;
chunk__42700_42704 = G__42721;
count__42701_42705 = G__42722;
i__42702_42706 = G__42723;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_42732__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__42728_42733 = cljs.core.seq(domina.nodes(content));var chunk__42729_42734 = null;var count__42730_42735 = (0);var i__42731_42736 = (0);while(true){
if((i__42731_42736 < count__42730_42735))
{var node_42737 = chunk__42729_42734.cljs$core$IIndexed$_nth$arity$2(null,i__42731_42736);goog.dom.classes.set(node_42737,classes_42732__$1);
{
var G__42738 = seq__42728_42733;
var G__42739 = chunk__42729_42734;
var G__42740 = count__42730_42735;
var G__42741 = (i__42731_42736 + (1));
seq__42728_42733 = G__42738;
chunk__42729_42734 = G__42739;
count__42730_42735 = G__42740;
i__42731_42736 = G__42741;
continue;
}
} else
{var temp__4126__auto___42742 = cljs.core.seq(seq__42728_42733);if(temp__4126__auto___42742)
{var seq__42728_42743__$1 = temp__4126__auto___42742;if(cljs.core.chunked_seq_QMARK_(seq__42728_42743__$1))
{var c__4299__auto___42744 = cljs.core.chunk_first(seq__42728_42743__$1);{
var G__42745 = cljs.core.chunk_rest(seq__42728_42743__$1);
var G__42746 = c__4299__auto___42744;
var G__42747 = cljs.core.count(c__4299__auto___42744);
var G__42748 = (0);
seq__42728_42733 = G__42745;
chunk__42729_42734 = G__42746;
count__42730_42735 = G__42747;
i__42731_42736 = G__42748;
continue;
}
} else
{var node_42749 = cljs.core.first(seq__42728_42743__$1);goog.dom.classes.set(node_42749,classes_42732__$1);
{
var G__42750 = cljs.core.next(seq__42728_42743__$1);
var G__42751 = null;
var G__42752 = (0);
var G__42753 = (0);
seq__42728_42733 = G__42750;
chunk__42729_42734 = G__42751;
count__42730_42735 = G__42752;
i__42731_42736 = G__42753;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__42758_42762 = cljs.core.seq(domina.nodes(content));var chunk__42759_42763 = null;var count__42760_42764 = (0);var i__42761_42765 = (0);while(true){
if((i__42761_42765 < count__42760_42764))
{var node_42766 = chunk__42759_42763.cljs$core$IIndexed$_nth$arity$2(null,i__42761_42765);goog.dom.setTextContent(node_42766,value);
{
var G__42767 = seq__42758_42762;
var G__42768 = chunk__42759_42763;
var G__42769 = count__42760_42764;
var G__42770 = (i__42761_42765 + (1));
seq__42758_42762 = G__42767;
chunk__42759_42763 = G__42768;
count__42760_42764 = G__42769;
i__42761_42765 = G__42770;
continue;
}
} else
{var temp__4126__auto___42771 = cljs.core.seq(seq__42758_42762);if(temp__4126__auto___42771)
{var seq__42758_42772__$1 = temp__4126__auto___42771;if(cljs.core.chunked_seq_QMARK_(seq__42758_42772__$1))
{var c__4299__auto___42773 = cljs.core.chunk_first(seq__42758_42772__$1);{
var G__42774 = cljs.core.chunk_rest(seq__42758_42772__$1);
var G__42775 = c__4299__auto___42773;
var G__42776 = cljs.core.count(c__4299__auto___42773);
var G__42777 = (0);
seq__42758_42762 = G__42774;
chunk__42759_42763 = G__42775;
count__42760_42764 = G__42776;
i__42761_42765 = G__42777;
continue;
}
} else
{var node_42778 = cljs.core.first(seq__42758_42772__$1);goog.dom.setTextContent(node_42778,value);
{
var G__42779 = cljs.core.next(seq__42758_42772__$1);
var G__42780 = null;
var G__42781 = (0);
var G__42782 = (0);
seq__42758_42762 = G__42779;
chunk__42759_42763 = G__42780;
count__42760_42764 = G__42781;
i__42761_42765 = G__42782;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__42787_42791 = cljs.core.seq(domina.nodes(content));var chunk__42788_42792 = null;var count__42789_42793 = (0);var i__42790_42794 = (0);while(true){
if((i__42790_42794 < count__42789_42793))
{var node_42795 = chunk__42788_42792.cljs$core$IIndexed$_nth$arity$2(null,i__42790_42794);goog.dom.forms.setValue(node_42795,value);
{
var G__42796 = seq__42787_42791;
var G__42797 = chunk__42788_42792;
var G__42798 = count__42789_42793;
var G__42799 = (i__42790_42794 + (1));
seq__42787_42791 = G__42796;
chunk__42788_42792 = G__42797;
count__42789_42793 = G__42798;
i__42790_42794 = G__42799;
continue;
}
} else
{var temp__4126__auto___42800 = cljs.core.seq(seq__42787_42791);if(temp__4126__auto___42800)
{var seq__42787_42801__$1 = temp__4126__auto___42800;if(cljs.core.chunked_seq_QMARK_(seq__42787_42801__$1))
{var c__4299__auto___42802 = cljs.core.chunk_first(seq__42787_42801__$1);{
var G__42803 = cljs.core.chunk_rest(seq__42787_42801__$1);
var G__42804 = c__4299__auto___42802;
var G__42805 = cljs.core.count(c__4299__auto___42802);
var G__42806 = (0);
seq__42787_42791 = G__42803;
chunk__42788_42792 = G__42804;
count__42789_42793 = G__42805;
i__42790_42794 = G__42806;
continue;
}
} else
{var node_42807 = cljs.core.first(seq__42787_42801__$1);goog.dom.forms.setValue(node_42807,value);
{
var G__42808 = cljs.core.next(seq__42787_42801__$1);
var G__42809 = null;
var G__42810 = (0);
var G__42811 = (0);
seq__42787_42791 = G__42808;
chunk__42788_42792 = G__42809;
count__42789_42793 = G__42810;
i__42790_42794 = G__42811;
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
{var value_42822 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__42818_42823 = cljs.core.seq(domina.nodes(content));var chunk__42819_42824 = null;var count__42820_42825 = (0);var i__42821_42826 = (0);while(true){
if((i__42821_42826 < count__42820_42825))
{var node_42827 = chunk__42819_42824.cljs$core$IIndexed$_nth$arity$2(null,i__42821_42826);node_42827.innerHTML = value_42822;
{
var G__42828 = seq__42818_42823;
var G__42829 = chunk__42819_42824;
var G__42830 = count__42820_42825;
var G__42831 = (i__42821_42826 + (1));
seq__42818_42823 = G__42828;
chunk__42819_42824 = G__42829;
count__42820_42825 = G__42830;
i__42821_42826 = G__42831;
continue;
}
} else
{var temp__4126__auto___42832 = cljs.core.seq(seq__42818_42823);if(temp__4126__auto___42832)
{var seq__42818_42833__$1 = temp__4126__auto___42832;if(cljs.core.chunked_seq_QMARK_(seq__42818_42833__$1))
{var c__4299__auto___42834 = cljs.core.chunk_first(seq__42818_42833__$1);{
var G__42835 = cljs.core.chunk_rest(seq__42818_42833__$1);
var G__42836 = c__4299__auto___42834;
var G__42837 = cljs.core.count(c__4299__auto___42834);
var G__42838 = (0);
seq__42818_42823 = G__42835;
chunk__42819_42824 = G__42836;
count__42820_42825 = G__42837;
i__42821_42826 = G__42838;
continue;
}
} else
{var node_42839 = cljs.core.first(seq__42818_42833__$1);node_42839.innerHTML = value_42822;
{
var G__42840 = cljs.core.next(seq__42818_42833__$1);
var G__42841 = null;
var G__42842 = (0);
var G__42843 = (0);
seq__42818_42823 = G__42840;
chunk__42819_42824 = G__42841;
count__42820_42825 = G__42842;
i__42821_42826 = G__42843;
continue;
}
}
} else
{}
}
break;
}
}catch (e42817){if((e42817 instanceof Error))
{var e_42844 = e42817;domina.replace_children_BANG_(content,value_42822);
} else
{if(cljs.core.constant$keyword$758)
{throw e42817;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__42851_42855 = cljs.core.seq(children);var chunk__42852_42856 = null;var count__42853_42857 = (0);var i__42854_42858 = (0);while(true){
if((i__42854_42858 < count__42853_42857))
{var child_42859 = chunk__42852_42856.cljs$core$IIndexed$_nth$arity$2(null,i__42854_42858);frag.appendChild(child_42859);
{
var G__42860 = seq__42851_42855;
var G__42861 = chunk__42852_42856;
var G__42862 = count__42853_42857;
var G__42863 = (i__42854_42858 + (1));
seq__42851_42855 = G__42860;
chunk__42852_42856 = G__42861;
count__42853_42857 = G__42862;
i__42854_42858 = G__42863;
continue;
}
} else
{var temp__4126__auto___42864 = cljs.core.seq(seq__42851_42855);if(temp__4126__auto___42864)
{var seq__42851_42865__$1 = temp__4126__auto___42864;if(cljs.core.chunked_seq_QMARK_(seq__42851_42865__$1))
{var c__4299__auto___42866 = cljs.core.chunk_first(seq__42851_42865__$1);{
var G__42867 = cljs.core.chunk_rest(seq__42851_42865__$1);
var G__42868 = c__4299__auto___42866;
var G__42869 = cljs.core.count(c__4299__auto___42866);
var G__42870 = (0);
seq__42851_42855 = G__42867;
chunk__42852_42856 = G__42868;
count__42853_42857 = G__42869;
i__42854_42858 = G__42870;
continue;
}
} else
{var child_42871 = cljs.core.first(seq__42851_42865__$1);frag.appendChild(child_42871);
{
var G__42872 = cljs.core.next(seq__42851_42865__$1);
var G__42873 = null;
var G__42874 = (0);
var G__42875 = (0);
seq__42851_42855 = G__42872;
chunk__42852_42856 = G__42873;
count__42853_42857 = G__42874;
i__42854_42858 = G__42875;
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
return (function (p1__42845_SHARP_,p2__42846_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__42845_SHARP_,p2__42846_SHARP_) : f.call(null,p1__42845_SHARP_,p2__42846_SHARP_));
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
{if((function (){var G__42877 = list_thing;if(G__42877)
{var bit__4193__auto__ = (G__42877.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__42877.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42877.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42877);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42877);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$759)
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
{if((function (){var G__42878 = content;if(G__42878)
{var bit__4193__auto__ = (G__42878.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__42878.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42878.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42878);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42878);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$759)
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
{if((function (){var G__42879 = content;if(G__42879)
{var bit__4193__auto__ = (G__42879.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__42879.cljs$core$ISeqable$))
{return true;
} else
{if((!G__42879.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42879);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__42879);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$759)
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
