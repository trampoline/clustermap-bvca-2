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
var opt_wrapper_40531 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40532 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_40533 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$645,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40533,opt_wrapper_40531,table_section_wrapper_40532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_40531,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_40532,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40532,cell_wrapper_40533,table_section_wrapper_40532,table_section_wrapper_40532]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__40538 = cljs.core.seq(tbody);var chunk__40539 = null;var count__40540 = (0);var i__40541 = (0);while(true){
if((i__40541 < count__40540))
{var child = chunk__40539.cljs$core$IIndexed$_nth$arity$2(null,i__40541);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40542 = seq__40538;
var G__40543 = chunk__40539;
var G__40544 = count__40540;
var G__40545 = (i__40541 + (1));
seq__40538 = G__40542;
chunk__40539 = G__40543;
count__40540 = G__40544;
i__40541 = G__40545;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__40538);if(temp__4126__auto__)
{var seq__40538__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__40538__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__40538__$1);{
var G__40546 = cljs.core.chunk_rest(seq__40538__$1);
var G__40547 = c__4299__auto__;
var G__40548 = cljs.core.count(c__4299__auto__);
var G__40549 = (0);
seq__40538 = G__40546;
chunk__40539 = G__40547;
count__40540 = G__40548;
i__40541 = G__40549;
continue;
}
} else
{var child = cljs.core.first(seq__40538__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40550 = cljs.core.next(seq__40538__$1);
var G__40551 = null;
var G__40552 = (0);
var G__40553 = (0);
seq__40538 = G__40550;
chunk__40539 = G__40551;
count__40540 = G__40552;
i__40541 = G__40553;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__40555 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40555,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__40556 = wrapper.lastChild;
var G__40557 = (level - (1));
wrapper = G__40556;
level = G__40557;
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
domina.DomContent = (function (){var obj40559 = {};return obj40559;
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
log_debug.cljs$lang$applyTo = (function (arglist__40560){
var mesg = cljs.core.seq(arglist__40560);
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
log.cljs$lang$applyTo = (function (arglist__40561){
var mesg = cljs.core.seq(arglist__40561);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__40562){
var contents = cljs.core.seq(arglist__40562);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40563_SHARP_){return p1__40563_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40564_SHARP_,p2__40565_SHARP_){return goog.dom.insertChildAt(p1__40564_SHARP_,p2__40565_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__40564_SHARP_,p2__40565_SHARP_){return goog.dom.insertChildAt(p1__40564_SHARP_,p2__40565_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40567_SHARP_,p2__40566_SHARP_){return goog.dom.insertSiblingBefore(p2__40566_SHARP_,p1__40567_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40567_SHARP_,p2__40566_SHARP_){return goog.dom.insertSiblingBefore(p2__40566_SHARP_,p1__40567_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40569_SHARP_,p2__40568_SHARP_){return goog.dom.insertSiblingAfter(p2__40568_SHARP_,p1__40569_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40569_SHARP_,p2__40568_SHARP_){return goog.dom.insertSiblingAfter(p2__40568_SHARP_,p1__40569_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__40571_SHARP_,p2__40570_SHARP_){return goog.dom.replaceNode(p2__40570_SHARP_,p1__40571_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__40571_SHARP_,p2__40570_SHARP_){return goog.dom.replaceNode(p2__40570_SHARP_,p1__40571_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__40576_40580 = cljs.core.seq(domina.nodes(content));var chunk__40577_40581 = null;var count__40578_40582 = (0);var i__40579_40583 = (0);while(true){
if((i__40579_40583 < count__40578_40582))
{var n_40584 = chunk__40577_40581.cljs$core$IIndexed$_nth$arity$2(null,i__40579_40583);goog.style.setStyle(n_40584,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40585 = seq__40576_40580;
var G__40586 = chunk__40577_40581;
var G__40587 = count__40578_40582;
var G__40588 = (i__40579_40583 + (1));
seq__40576_40580 = G__40585;
chunk__40577_40581 = G__40586;
count__40578_40582 = G__40587;
i__40579_40583 = G__40588;
continue;
}
} else
{var temp__4126__auto___40589 = cljs.core.seq(seq__40576_40580);if(temp__4126__auto___40589)
{var seq__40576_40590__$1 = temp__4126__auto___40589;if(cljs.core.chunked_seq_QMARK_(seq__40576_40590__$1))
{var c__4299__auto___40591 = cljs.core.chunk_first(seq__40576_40590__$1);{
var G__40592 = cljs.core.chunk_rest(seq__40576_40590__$1);
var G__40593 = c__4299__auto___40591;
var G__40594 = cljs.core.count(c__4299__auto___40591);
var G__40595 = (0);
seq__40576_40580 = G__40592;
chunk__40577_40581 = G__40593;
count__40578_40582 = G__40594;
i__40579_40583 = G__40595;
continue;
}
} else
{var n_40596 = cljs.core.first(seq__40576_40590__$1);goog.style.setStyle(n_40596,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40597 = cljs.core.next(seq__40576_40590__$1);
var G__40598 = null;
var G__40599 = (0);
var G__40600 = (0);
seq__40576_40580 = G__40597;
chunk__40577_40581 = G__40598;
count__40578_40582 = G__40599;
i__40579_40583 = G__40600;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40601){
var content = cljs.core.first(arglist__40601);
arglist__40601 = cljs.core.next(arglist__40601);
var name = cljs.core.first(arglist__40601);
var value = cljs.core.rest(arglist__40601);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__40606_40610 = cljs.core.seq(domina.nodes(content));var chunk__40607_40611 = null;var count__40608_40612 = (0);var i__40609_40613 = (0);while(true){
if((i__40609_40613 < count__40608_40612))
{var n_40614 = chunk__40607_40611.cljs$core$IIndexed$_nth$arity$2(null,i__40609_40613);n_40614.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40615 = seq__40606_40610;
var G__40616 = chunk__40607_40611;
var G__40617 = count__40608_40612;
var G__40618 = (i__40609_40613 + (1));
seq__40606_40610 = G__40615;
chunk__40607_40611 = G__40616;
count__40608_40612 = G__40617;
i__40609_40613 = G__40618;
continue;
}
} else
{var temp__4126__auto___40619 = cljs.core.seq(seq__40606_40610);if(temp__4126__auto___40619)
{var seq__40606_40620__$1 = temp__4126__auto___40619;if(cljs.core.chunked_seq_QMARK_(seq__40606_40620__$1))
{var c__4299__auto___40621 = cljs.core.chunk_first(seq__40606_40620__$1);{
var G__40622 = cljs.core.chunk_rest(seq__40606_40620__$1);
var G__40623 = c__4299__auto___40621;
var G__40624 = cljs.core.count(c__4299__auto___40621);
var G__40625 = (0);
seq__40606_40610 = G__40622;
chunk__40607_40611 = G__40623;
count__40608_40612 = G__40624;
i__40609_40613 = G__40625;
continue;
}
} else
{var n_40626 = cljs.core.first(seq__40606_40620__$1);n_40626.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__40627 = cljs.core.next(seq__40606_40620__$1);
var G__40628 = null;
var G__40629 = (0);
var G__40630 = (0);
seq__40606_40610 = G__40627;
chunk__40607_40611 = G__40628;
count__40608_40612 = G__40629;
i__40609_40613 = G__40630;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40631){
var content = cljs.core.first(arglist__40631);
arglist__40631 = cljs.core.next(arglist__40631);
var name = cljs.core.first(arglist__40631);
var value = cljs.core.rest(arglist__40631);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40636_40640 = cljs.core.seq(domina.nodes(content));var chunk__40637_40641 = null;var count__40638_40642 = (0);var i__40639_40643 = (0);while(true){
if((i__40639_40643 < count__40638_40642))
{var n_40644 = chunk__40637_40641.cljs$core$IIndexed$_nth$arity$2(null,i__40639_40643);n_40644.removeAttribute(cljs.core.name(name));
{
var G__40645 = seq__40636_40640;
var G__40646 = chunk__40637_40641;
var G__40647 = count__40638_40642;
var G__40648 = (i__40639_40643 + (1));
seq__40636_40640 = G__40645;
chunk__40637_40641 = G__40646;
count__40638_40642 = G__40647;
i__40639_40643 = G__40648;
continue;
}
} else
{var temp__4126__auto___40649 = cljs.core.seq(seq__40636_40640);if(temp__4126__auto___40649)
{var seq__40636_40650__$1 = temp__4126__auto___40649;if(cljs.core.chunked_seq_QMARK_(seq__40636_40650__$1))
{var c__4299__auto___40651 = cljs.core.chunk_first(seq__40636_40650__$1);{
var G__40652 = cljs.core.chunk_rest(seq__40636_40650__$1);
var G__40653 = c__4299__auto___40651;
var G__40654 = cljs.core.count(c__4299__auto___40651);
var G__40655 = (0);
seq__40636_40640 = G__40652;
chunk__40637_40641 = G__40653;
count__40638_40642 = G__40654;
i__40639_40643 = G__40655;
continue;
}
} else
{var n_40656 = cljs.core.first(seq__40636_40650__$1);n_40656.removeAttribute(cljs.core.name(name));
{
var G__40657 = cljs.core.next(seq__40636_40650__$1);
var G__40658 = null;
var G__40659 = (0);
var G__40660 = (0);
seq__40636_40640 = G__40657;
chunk__40637_40641 = G__40658;
count__40638_40642 = G__40659;
i__40639_40643 = G__40660;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__40662 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40662,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40662,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
{if(cljs.core.constant$keyword$644)
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
return (function (p1__40663_SHARP_){var attr = attrs__$1.item(p1__40663_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40670_40676 = cljs.core.seq(styles);var chunk__40671_40677 = null;var count__40672_40678 = (0);var i__40673_40679 = (0);while(true){
if((i__40673_40679 < count__40672_40678))
{var vec__40674_40680 = chunk__40671_40677.cljs$core$IIndexed$_nth$arity$2(null,i__40673_40679);var name_40681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40674_40680,(0),null);var value_40682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40674_40680,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40681,cljs.core.array_seq([value_40682], 0));
{
var G__40683 = seq__40670_40676;
var G__40684 = chunk__40671_40677;
var G__40685 = count__40672_40678;
var G__40686 = (i__40673_40679 + (1));
seq__40670_40676 = G__40683;
chunk__40671_40677 = G__40684;
count__40672_40678 = G__40685;
i__40673_40679 = G__40686;
continue;
}
} else
{var temp__4126__auto___40687 = cljs.core.seq(seq__40670_40676);if(temp__4126__auto___40687)
{var seq__40670_40688__$1 = temp__4126__auto___40687;if(cljs.core.chunked_seq_QMARK_(seq__40670_40688__$1))
{var c__4299__auto___40689 = cljs.core.chunk_first(seq__40670_40688__$1);{
var G__40690 = cljs.core.chunk_rest(seq__40670_40688__$1);
var G__40691 = c__4299__auto___40689;
var G__40692 = cljs.core.count(c__4299__auto___40689);
var G__40693 = (0);
seq__40670_40676 = G__40690;
chunk__40671_40677 = G__40691;
count__40672_40678 = G__40692;
i__40673_40679 = G__40693;
continue;
}
} else
{var vec__40675_40694 = cljs.core.first(seq__40670_40688__$1);var name_40695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675_40694,(0),null);var value_40696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675_40694,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40695,cljs.core.array_seq([value_40696], 0));
{
var G__40697 = cljs.core.next(seq__40670_40688__$1);
var G__40698 = null;
var G__40699 = (0);
var G__40700 = (0);
seq__40670_40676 = G__40697;
chunk__40671_40677 = G__40698;
count__40672_40678 = G__40699;
i__40673_40679 = G__40700;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40707_40713 = cljs.core.seq(attrs);var chunk__40708_40714 = null;var count__40709_40715 = (0);var i__40710_40716 = (0);while(true){
if((i__40710_40716 < count__40709_40715))
{var vec__40711_40717 = chunk__40708_40714.cljs$core$IIndexed$_nth$arity$2(null,i__40710_40716);var name_40718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40711_40717,(0),null);var value_40719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40711_40717,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40718,cljs.core.array_seq([value_40719], 0));
{
var G__40720 = seq__40707_40713;
var G__40721 = chunk__40708_40714;
var G__40722 = count__40709_40715;
var G__40723 = (i__40710_40716 + (1));
seq__40707_40713 = G__40720;
chunk__40708_40714 = G__40721;
count__40709_40715 = G__40722;
i__40710_40716 = G__40723;
continue;
}
} else
{var temp__4126__auto___40724 = cljs.core.seq(seq__40707_40713);if(temp__4126__auto___40724)
{var seq__40707_40725__$1 = temp__4126__auto___40724;if(cljs.core.chunked_seq_QMARK_(seq__40707_40725__$1))
{var c__4299__auto___40726 = cljs.core.chunk_first(seq__40707_40725__$1);{
var G__40727 = cljs.core.chunk_rest(seq__40707_40725__$1);
var G__40728 = c__4299__auto___40726;
var G__40729 = cljs.core.count(c__4299__auto___40726);
var G__40730 = (0);
seq__40707_40713 = G__40727;
chunk__40708_40714 = G__40728;
count__40709_40715 = G__40729;
i__40710_40716 = G__40730;
continue;
}
} else
{var vec__40712_40731 = cljs.core.first(seq__40707_40725__$1);var name_40732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40712_40731,(0),null);var value_40733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40712_40731,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_40732,cljs.core.array_seq([value_40733], 0));
{
var G__40734 = cljs.core.next(seq__40707_40725__$1);
var G__40735 = null;
var G__40736 = (0);
var G__40737 = (0);
seq__40707_40713 = G__40734;
chunk__40708_40714 = G__40735;
count__40709_40715 = G__40736;
i__40710_40716 = G__40737;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40742_40746 = cljs.core.seq(domina.nodes(content));var chunk__40743_40747 = null;var count__40744_40748 = (0);var i__40745_40749 = (0);while(true){
if((i__40745_40749 < count__40744_40748))
{var node_40750 = chunk__40743_40747.cljs$core$IIndexed$_nth$arity$2(null,i__40745_40749);goog.dom.classes.add(node_40750,class$);
{
var G__40751 = seq__40742_40746;
var G__40752 = chunk__40743_40747;
var G__40753 = count__40744_40748;
var G__40754 = (i__40745_40749 + (1));
seq__40742_40746 = G__40751;
chunk__40743_40747 = G__40752;
count__40744_40748 = G__40753;
i__40745_40749 = G__40754;
continue;
}
} else
{var temp__4126__auto___40755 = cljs.core.seq(seq__40742_40746);if(temp__4126__auto___40755)
{var seq__40742_40756__$1 = temp__4126__auto___40755;if(cljs.core.chunked_seq_QMARK_(seq__40742_40756__$1))
{var c__4299__auto___40757 = cljs.core.chunk_first(seq__40742_40756__$1);{
var G__40758 = cljs.core.chunk_rest(seq__40742_40756__$1);
var G__40759 = c__4299__auto___40757;
var G__40760 = cljs.core.count(c__4299__auto___40757);
var G__40761 = (0);
seq__40742_40746 = G__40758;
chunk__40743_40747 = G__40759;
count__40744_40748 = G__40760;
i__40745_40749 = G__40761;
continue;
}
} else
{var node_40762 = cljs.core.first(seq__40742_40756__$1);goog.dom.classes.add(node_40762,class$);
{
var G__40763 = cljs.core.next(seq__40742_40756__$1);
var G__40764 = null;
var G__40765 = (0);
var G__40766 = (0);
seq__40742_40746 = G__40763;
chunk__40743_40747 = G__40764;
count__40744_40748 = G__40765;
i__40745_40749 = G__40766;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40771_40775 = cljs.core.seq(domina.nodes(content));var chunk__40772_40776 = null;var count__40773_40777 = (0);var i__40774_40778 = (0);while(true){
if((i__40774_40778 < count__40773_40777))
{var node_40779 = chunk__40772_40776.cljs$core$IIndexed$_nth$arity$2(null,i__40774_40778);goog.dom.classes.remove(node_40779,class$);
{
var G__40780 = seq__40771_40775;
var G__40781 = chunk__40772_40776;
var G__40782 = count__40773_40777;
var G__40783 = (i__40774_40778 + (1));
seq__40771_40775 = G__40780;
chunk__40772_40776 = G__40781;
count__40773_40777 = G__40782;
i__40774_40778 = G__40783;
continue;
}
} else
{var temp__4126__auto___40784 = cljs.core.seq(seq__40771_40775);if(temp__4126__auto___40784)
{var seq__40771_40785__$1 = temp__4126__auto___40784;if(cljs.core.chunked_seq_QMARK_(seq__40771_40785__$1))
{var c__4299__auto___40786 = cljs.core.chunk_first(seq__40771_40785__$1);{
var G__40787 = cljs.core.chunk_rest(seq__40771_40785__$1);
var G__40788 = c__4299__auto___40786;
var G__40789 = cljs.core.count(c__4299__auto___40786);
var G__40790 = (0);
seq__40771_40775 = G__40787;
chunk__40772_40776 = G__40788;
count__40773_40777 = G__40789;
i__40774_40778 = G__40790;
continue;
}
} else
{var node_40791 = cljs.core.first(seq__40771_40785__$1);goog.dom.classes.remove(node_40791,class$);
{
var G__40792 = cljs.core.next(seq__40771_40785__$1);
var G__40793 = null;
var G__40794 = (0);
var G__40795 = (0);
seq__40771_40775 = G__40792;
chunk__40772_40776 = G__40793;
count__40773_40777 = G__40794;
i__40774_40778 = G__40795;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40800_40804 = cljs.core.seq(domina.nodes(content));var chunk__40801_40805 = null;var count__40802_40806 = (0);var i__40803_40807 = (0);while(true){
if((i__40803_40807 < count__40802_40806))
{var node_40808 = chunk__40801_40805.cljs$core$IIndexed$_nth$arity$2(null,i__40803_40807);goog.dom.classes.toggle(node_40808,class$);
{
var G__40809 = seq__40800_40804;
var G__40810 = chunk__40801_40805;
var G__40811 = count__40802_40806;
var G__40812 = (i__40803_40807 + (1));
seq__40800_40804 = G__40809;
chunk__40801_40805 = G__40810;
count__40802_40806 = G__40811;
i__40803_40807 = G__40812;
continue;
}
} else
{var temp__4126__auto___40813 = cljs.core.seq(seq__40800_40804);if(temp__4126__auto___40813)
{var seq__40800_40814__$1 = temp__4126__auto___40813;if(cljs.core.chunked_seq_QMARK_(seq__40800_40814__$1))
{var c__4299__auto___40815 = cljs.core.chunk_first(seq__40800_40814__$1);{
var G__40816 = cljs.core.chunk_rest(seq__40800_40814__$1);
var G__40817 = c__4299__auto___40815;
var G__40818 = cljs.core.count(c__4299__auto___40815);
var G__40819 = (0);
seq__40800_40804 = G__40816;
chunk__40801_40805 = G__40817;
count__40802_40806 = G__40818;
i__40803_40807 = G__40819;
continue;
}
} else
{var node_40820 = cljs.core.first(seq__40800_40814__$1);goog.dom.classes.toggle(node_40820,class$);
{
var G__40821 = cljs.core.next(seq__40800_40814__$1);
var G__40822 = null;
var G__40823 = (0);
var G__40824 = (0);
seq__40800_40804 = G__40821;
chunk__40801_40805 = G__40822;
count__40802_40806 = G__40823;
i__40803_40807 = G__40824;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40833__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__40829_40834 = cljs.core.seq(domina.nodes(content));var chunk__40830_40835 = null;var count__40831_40836 = (0);var i__40832_40837 = (0);while(true){
if((i__40832_40837 < count__40831_40836))
{var node_40838 = chunk__40830_40835.cljs$core$IIndexed$_nth$arity$2(null,i__40832_40837);goog.dom.classes.set(node_40838,classes_40833__$1);
{
var G__40839 = seq__40829_40834;
var G__40840 = chunk__40830_40835;
var G__40841 = count__40831_40836;
var G__40842 = (i__40832_40837 + (1));
seq__40829_40834 = G__40839;
chunk__40830_40835 = G__40840;
count__40831_40836 = G__40841;
i__40832_40837 = G__40842;
continue;
}
} else
{var temp__4126__auto___40843 = cljs.core.seq(seq__40829_40834);if(temp__4126__auto___40843)
{var seq__40829_40844__$1 = temp__4126__auto___40843;if(cljs.core.chunked_seq_QMARK_(seq__40829_40844__$1))
{var c__4299__auto___40845 = cljs.core.chunk_first(seq__40829_40844__$1);{
var G__40846 = cljs.core.chunk_rest(seq__40829_40844__$1);
var G__40847 = c__4299__auto___40845;
var G__40848 = cljs.core.count(c__4299__auto___40845);
var G__40849 = (0);
seq__40829_40834 = G__40846;
chunk__40830_40835 = G__40847;
count__40831_40836 = G__40848;
i__40832_40837 = G__40849;
continue;
}
} else
{var node_40850 = cljs.core.first(seq__40829_40844__$1);goog.dom.classes.set(node_40850,classes_40833__$1);
{
var G__40851 = cljs.core.next(seq__40829_40844__$1);
var G__40852 = null;
var G__40853 = (0);
var G__40854 = (0);
seq__40829_40834 = G__40851;
chunk__40830_40835 = G__40852;
count__40831_40836 = G__40853;
i__40832_40837 = G__40854;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40859_40863 = cljs.core.seq(domina.nodes(content));var chunk__40860_40864 = null;var count__40861_40865 = (0);var i__40862_40866 = (0);while(true){
if((i__40862_40866 < count__40861_40865))
{var node_40867 = chunk__40860_40864.cljs$core$IIndexed$_nth$arity$2(null,i__40862_40866);goog.dom.setTextContent(node_40867,value);
{
var G__40868 = seq__40859_40863;
var G__40869 = chunk__40860_40864;
var G__40870 = count__40861_40865;
var G__40871 = (i__40862_40866 + (1));
seq__40859_40863 = G__40868;
chunk__40860_40864 = G__40869;
count__40861_40865 = G__40870;
i__40862_40866 = G__40871;
continue;
}
} else
{var temp__4126__auto___40872 = cljs.core.seq(seq__40859_40863);if(temp__4126__auto___40872)
{var seq__40859_40873__$1 = temp__4126__auto___40872;if(cljs.core.chunked_seq_QMARK_(seq__40859_40873__$1))
{var c__4299__auto___40874 = cljs.core.chunk_first(seq__40859_40873__$1);{
var G__40875 = cljs.core.chunk_rest(seq__40859_40873__$1);
var G__40876 = c__4299__auto___40874;
var G__40877 = cljs.core.count(c__4299__auto___40874);
var G__40878 = (0);
seq__40859_40863 = G__40875;
chunk__40860_40864 = G__40876;
count__40861_40865 = G__40877;
i__40862_40866 = G__40878;
continue;
}
} else
{var node_40879 = cljs.core.first(seq__40859_40873__$1);goog.dom.setTextContent(node_40879,value);
{
var G__40880 = cljs.core.next(seq__40859_40873__$1);
var G__40881 = null;
var G__40882 = (0);
var G__40883 = (0);
seq__40859_40863 = G__40880;
chunk__40860_40864 = G__40881;
count__40861_40865 = G__40882;
i__40862_40866 = G__40883;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40888_40892 = cljs.core.seq(domina.nodes(content));var chunk__40889_40893 = null;var count__40890_40894 = (0);var i__40891_40895 = (0);while(true){
if((i__40891_40895 < count__40890_40894))
{var node_40896 = chunk__40889_40893.cljs$core$IIndexed$_nth$arity$2(null,i__40891_40895);goog.dom.forms.setValue(node_40896,value);
{
var G__40897 = seq__40888_40892;
var G__40898 = chunk__40889_40893;
var G__40899 = count__40890_40894;
var G__40900 = (i__40891_40895 + (1));
seq__40888_40892 = G__40897;
chunk__40889_40893 = G__40898;
count__40890_40894 = G__40899;
i__40891_40895 = G__40900;
continue;
}
} else
{var temp__4126__auto___40901 = cljs.core.seq(seq__40888_40892);if(temp__4126__auto___40901)
{var seq__40888_40902__$1 = temp__4126__auto___40901;if(cljs.core.chunked_seq_QMARK_(seq__40888_40902__$1))
{var c__4299__auto___40903 = cljs.core.chunk_first(seq__40888_40902__$1);{
var G__40904 = cljs.core.chunk_rest(seq__40888_40902__$1);
var G__40905 = c__4299__auto___40903;
var G__40906 = cljs.core.count(c__4299__auto___40903);
var G__40907 = (0);
seq__40888_40892 = G__40904;
chunk__40889_40893 = G__40905;
count__40890_40894 = G__40906;
i__40891_40895 = G__40907;
continue;
}
} else
{var node_40908 = cljs.core.first(seq__40888_40902__$1);goog.dom.forms.setValue(node_40908,value);
{
var G__40909 = cljs.core.next(seq__40888_40902__$1);
var G__40910 = null;
var G__40911 = (0);
var G__40912 = (0);
seq__40888_40892 = G__40909;
chunk__40889_40893 = G__40910;
count__40890_40894 = G__40911;
i__40891_40895 = G__40912;
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
{var value_40923 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40919_40924 = cljs.core.seq(domina.nodes(content));var chunk__40920_40925 = null;var count__40921_40926 = (0);var i__40922_40927 = (0);while(true){
if((i__40922_40927 < count__40921_40926))
{var node_40928 = chunk__40920_40925.cljs$core$IIndexed$_nth$arity$2(null,i__40922_40927);node_40928.innerHTML = value_40923;
{
var G__40929 = seq__40919_40924;
var G__40930 = chunk__40920_40925;
var G__40931 = count__40921_40926;
var G__40932 = (i__40922_40927 + (1));
seq__40919_40924 = G__40929;
chunk__40920_40925 = G__40930;
count__40921_40926 = G__40931;
i__40922_40927 = G__40932;
continue;
}
} else
{var temp__4126__auto___40933 = cljs.core.seq(seq__40919_40924);if(temp__4126__auto___40933)
{var seq__40919_40934__$1 = temp__4126__auto___40933;if(cljs.core.chunked_seq_QMARK_(seq__40919_40934__$1))
{var c__4299__auto___40935 = cljs.core.chunk_first(seq__40919_40934__$1);{
var G__40936 = cljs.core.chunk_rest(seq__40919_40934__$1);
var G__40937 = c__4299__auto___40935;
var G__40938 = cljs.core.count(c__4299__auto___40935);
var G__40939 = (0);
seq__40919_40924 = G__40936;
chunk__40920_40925 = G__40937;
count__40921_40926 = G__40938;
i__40922_40927 = G__40939;
continue;
}
} else
{var node_40940 = cljs.core.first(seq__40919_40934__$1);node_40940.innerHTML = value_40923;
{
var G__40941 = cljs.core.next(seq__40919_40934__$1);
var G__40942 = null;
var G__40943 = (0);
var G__40944 = (0);
seq__40919_40924 = G__40941;
chunk__40920_40925 = G__40942;
count__40921_40926 = G__40943;
i__40922_40927 = G__40944;
continue;
}
}
} else
{}
}
break;
}
}catch (e40918){if((e40918 instanceof Error))
{var e_40945 = e40918;domina.replace_children_BANG_(content,value_40923);
} else
{if(cljs.core.constant$keyword$644)
{throw e40918;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40952_40956 = cljs.core.seq(children);var chunk__40953_40957 = null;var count__40954_40958 = (0);var i__40955_40959 = (0);while(true){
if((i__40955_40959 < count__40954_40958))
{var child_40960 = chunk__40953_40957.cljs$core$IIndexed$_nth$arity$2(null,i__40955_40959);frag.appendChild(child_40960);
{
var G__40961 = seq__40952_40956;
var G__40962 = chunk__40953_40957;
var G__40963 = count__40954_40958;
var G__40964 = (i__40955_40959 + (1));
seq__40952_40956 = G__40961;
chunk__40953_40957 = G__40962;
count__40954_40958 = G__40963;
i__40955_40959 = G__40964;
continue;
}
} else
{var temp__4126__auto___40965 = cljs.core.seq(seq__40952_40956);if(temp__4126__auto___40965)
{var seq__40952_40966__$1 = temp__4126__auto___40965;if(cljs.core.chunked_seq_QMARK_(seq__40952_40966__$1))
{var c__4299__auto___40967 = cljs.core.chunk_first(seq__40952_40966__$1);{
var G__40968 = cljs.core.chunk_rest(seq__40952_40966__$1);
var G__40969 = c__4299__auto___40967;
var G__40970 = cljs.core.count(c__4299__auto___40967);
var G__40971 = (0);
seq__40952_40956 = G__40968;
chunk__40953_40957 = G__40969;
count__40954_40958 = G__40970;
i__40955_40959 = G__40971;
continue;
}
} else
{var child_40972 = cljs.core.first(seq__40952_40966__$1);frag.appendChild(child_40972);
{
var G__40973 = cljs.core.next(seq__40952_40966__$1);
var G__40974 = null;
var G__40975 = (0);
var G__40976 = (0);
seq__40952_40956 = G__40973;
chunk__40953_40957 = G__40974;
count__40954_40958 = G__40975;
i__40955_40959 = G__40976;
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
return (function (p1__40946_SHARP_,p2__40947_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__40946_SHARP_,p2__40947_SHARP_) : f.call(null,p1__40946_SHARP_,p2__40947_SHARP_));
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
{if((function (){var G__40978 = list_thing;if(G__40978)
{var bit__4193__auto__ = (G__40978.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__40978.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40978.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40978);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40978);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$645)
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
{if((function (){var G__40979 = content;if(G__40979)
{var bit__4193__auto__ = (G__40979.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__40979.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40979.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40979);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40979);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$645)
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
{if((function (){var G__40980 = content;if(G__40980)
{var bit__4193__auto__ = (G__40980.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__40980.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40980.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40980);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__40980);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$645)
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
