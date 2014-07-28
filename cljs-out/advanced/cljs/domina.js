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
var opt_wrapper_44617 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_44618 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_44619 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$765,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_44619,opt_wrapper_44617,table_section_wrapper_44618,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_44617,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_44618,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_44618,cell_wrapper_44619,table_section_wrapper_44618,table_section_wrapper_44618]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__44624 = cljs.core.seq(tbody);var chunk__44625 = null;var count__44626 = (0);var i__44627 = (0);while(true){
if((i__44627 < count__44626))
{var child = chunk__44625.cljs$core$IIndexed$_nth$arity$2(null,i__44627);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44628 = seq__44624;
var G__44629 = chunk__44625;
var G__44630 = count__44626;
var G__44631 = (i__44627 + (1));
seq__44624 = G__44628;
chunk__44625 = G__44629;
count__44626 = G__44630;
i__44627 = G__44631;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__44624);if(temp__4126__auto__)
{var seq__44624__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__44624__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__44624__$1);{
var G__44632 = cljs.core.chunk_rest(seq__44624__$1);
var G__44633 = c__4299__auto__;
var G__44634 = cljs.core.count(c__4299__auto__);
var G__44635 = (0);
seq__44624 = G__44632;
chunk__44625 = G__44633;
count__44626 = G__44634;
i__44627 = G__44635;
continue;
}
} else
{var child = cljs.core.first(seq__44624__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__44636 = cljs.core.next(seq__44624__$1);
var G__44637 = null;
var G__44638 = (0);
var G__44639 = (0);
seq__44624 = G__44636;
chunk__44625 = G__44637;
count__44626 = G__44638;
i__44627 = G__44639;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__44641 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$765.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44641,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44641,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44641,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__44642 = wrapper.lastChild;
var G__44643 = (level - (1));
wrapper = G__44642;
level = G__44643;
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
domina.DomContent = (function (){var obj44645 = {};return obj44645;
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
log_debug.cljs$lang$applyTo = (function (arglist__44646){
var mesg = cljs.core.seq(arglist__44646);
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
log.cljs$lang$applyTo = (function (arglist__44647){
var mesg = cljs.core.seq(arglist__44647);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__44648){
var contents = cljs.core.seq(arglist__44648);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__44649_SHARP_){return p1__44649_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44650_SHARP_,p2__44651_SHARP_){return goog.dom.insertChildAt(p1__44650_SHARP_,p2__44651_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__44650_SHARP_,p2__44651_SHARP_){return goog.dom.insertChildAt(p1__44650_SHARP_,p2__44651_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44653_SHARP_,p2__44652_SHARP_){return goog.dom.insertSiblingBefore(p2__44652_SHARP_,p1__44653_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44653_SHARP_,p2__44652_SHARP_){return goog.dom.insertSiblingBefore(p2__44652_SHARP_,p1__44653_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44655_SHARP_,p2__44654_SHARP_){return goog.dom.insertSiblingAfter(p2__44654_SHARP_,p1__44655_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44655_SHARP_,p2__44654_SHARP_){return goog.dom.insertSiblingAfter(p2__44654_SHARP_,p1__44655_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__44657_SHARP_,p2__44656_SHARP_){return goog.dom.replaceNode(p2__44656_SHARP_,p1__44657_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__44657_SHARP_,p2__44656_SHARP_){return goog.dom.replaceNode(p2__44656_SHARP_,p1__44657_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__44662_44666 = cljs.core.seq(domina.nodes(content));var chunk__44663_44667 = null;var count__44664_44668 = (0);var i__44665_44669 = (0);while(true){
if((i__44665_44669 < count__44664_44668))
{var n_44670 = chunk__44663_44667.cljs$core$IIndexed$_nth$arity$2(null,i__44665_44669);goog.style.setStyle(n_44670,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44671 = seq__44662_44666;
var G__44672 = chunk__44663_44667;
var G__44673 = count__44664_44668;
var G__44674 = (i__44665_44669 + (1));
seq__44662_44666 = G__44671;
chunk__44663_44667 = G__44672;
count__44664_44668 = G__44673;
i__44665_44669 = G__44674;
continue;
}
} else
{var temp__4126__auto___44675 = cljs.core.seq(seq__44662_44666);if(temp__4126__auto___44675)
{var seq__44662_44676__$1 = temp__4126__auto___44675;if(cljs.core.chunked_seq_QMARK_(seq__44662_44676__$1))
{var c__4299__auto___44677 = cljs.core.chunk_first(seq__44662_44676__$1);{
var G__44678 = cljs.core.chunk_rest(seq__44662_44676__$1);
var G__44679 = c__4299__auto___44677;
var G__44680 = cljs.core.count(c__4299__auto___44677);
var G__44681 = (0);
seq__44662_44666 = G__44678;
chunk__44663_44667 = G__44679;
count__44664_44668 = G__44680;
i__44665_44669 = G__44681;
continue;
}
} else
{var n_44682 = cljs.core.first(seq__44662_44676__$1);goog.style.setStyle(n_44682,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44683 = cljs.core.next(seq__44662_44676__$1);
var G__44684 = null;
var G__44685 = (0);
var G__44686 = (0);
seq__44662_44666 = G__44683;
chunk__44663_44667 = G__44684;
count__44664_44668 = G__44685;
i__44665_44669 = G__44686;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__44687){
var content = cljs.core.first(arglist__44687);
arglist__44687 = cljs.core.next(arglist__44687);
var name = cljs.core.first(arglist__44687);
var value = cljs.core.rest(arglist__44687);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__44692_44696 = cljs.core.seq(domina.nodes(content));var chunk__44693_44697 = null;var count__44694_44698 = (0);var i__44695_44699 = (0);while(true){
if((i__44695_44699 < count__44694_44698))
{var n_44700 = chunk__44693_44697.cljs$core$IIndexed$_nth$arity$2(null,i__44695_44699);n_44700.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44701 = seq__44692_44696;
var G__44702 = chunk__44693_44697;
var G__44703 = count__44694_44698;
var G__44704 = (i__44695_44699 + (1));
seq__44692_44696 = G__44701;
chunk__44693_44697 = G__44702;
count__44694_44698 = G__44703;
i__44695_44699 = G__44704;
continue;
}
} else
{var temp__4126__auto___44705 = cljs.core.seq(seq__44692_44696);if(temp__4126__auto___44705)
{var seq__44692_44706__$1 = temp__4126__auto___44705;if(cljs.core.chunked_seq_QMARK_(seq__44692_44706__$1))
{var c__4299__auto___44707 = cljs.core.chunk_first(seq__44692_44706__$1);{
var G__44708 = cljs.core.chunk_rest(seq__44692_44706__$1);
var G__44709 = c__4299__auto___44707;
var G__44710 = cljs.core.count(c__4299__auto___44707);
var G__44711 = (0);
seq__44692_44696 = G__44708;
chunk__44693_44697 = G__44709;
count__44694_44698 = G__44710;
i__44695_44699 = G__44711;
continue;
}
} else
{var n_44712 = cljs.core.first(seq__44692_44706__$1);n_44712.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__44713 = cljs.core.next(seq__44692_44706__$1);
var G__44714 = null;
var G__44715 = (0);
var G__44716 = (0);
seq__44692_44696 = G__44713;
chunk__44693_44697 = G__44714;
count__44694_44698 = G__44715;
i__44695_44699 = G__44716;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__44717){
var content = cljs.core.first(arglist__44717);
arglist__44717 = cljs.core.next(arglist__44717);
var name = cljs.core.first(arglist__44717);
var value = cljs.core.rest(arglist__44717);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__44722_44726 = cljs.core.seq(domina.nodes(content));var chunk__44723_44727 = null;var count__44724_44728 = (0);var i__44725_44729 = (0);while(true){
if((i__44725_44729 < count__44724_44728))
{var n_44730 = chunk__44723_44727.cljs$core$IIndexed$_nth$arity$2(null,i__44725_44729);n_44730.removeAttribute(cljs.core.name(name));
{
var G__44731 = seq__44722_44726;
var G__44732 = chunk__44723_44727;
var G__44733 = count__44724_44728;
var G__44734 = (i__44725_44729 + (1));
seq__44722_44726 = G__44731;
chunk__44723_44727 = G__44732;
count__44724_44728 = G__44733;
i__44725_44729 = G__44734;
continue;
}
} else
{var temp__4126__auto___44735 = cljs.core.seq(seq__44722_44726);if(temp__4126__auto___44735)
{var seq__44722_44736__$1 = temp__4126__auto___44735;if(cljs.core.chunked_seq_QMARK_(seq__44722_44736__$1))
{var c__4299__auto___44737 = cljs.core.chunk_first(seq__44722_44736__$1);{
var G__44738 = cljs.core.chunk_rest(seq__44722_44736__$1);
var G__44739 = c__4299__auto___44737;
var G__44740 = cljs.core.count(c__4299__auto___44737);
var G__44741 = (0);
seq__44722_44726 = G__44738;
chunk__44723_44727 = G__44739;
count__44724_44728 = G__44740;
i__44725_44729 = G__44741;
continue;
}
} else
{var n_44742 = cljs.core.first(seq__44722_44736__$1);n_44742.removeAttribute(cljs.core.name(name));
{
var G__44743 = cljs.core.next(seq__44722_44736__$1);
var G__44744 = null;
var G__44745 = (0);
var G__44746 = (0);
seq__44722_44726 = G__44743;
chunk__44723_44727 = G__44744;
count__44724_44728 = G__44745;
i__44725_44729 = G__44746;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__44748 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44748,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44748,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
{if(cljs.core.constant$keyword$764)
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
return (function (p1__44749_SHARP_){var attr = attrs__$1.item(p1__44749_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__44756_44762 = cljs.core.seq(styles);var chunk__44757_44763 = null;var count__44758_44764 = (0);var i__44759_44765 = (0);while(true){
if((i__44759_44765 < count__44758_44764))
{var vec__44760_44766 = chunk__44757_44763.cljs$core$IIndexed$_nth$arity$2(null,i__44759_44765);var name_44767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760_44766,(0),null);var value_44768 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44760_44766,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44767,cljs.core.array_seq([value_44768], 0));
{
var G__44769 = seq__44756_44762;
var G__44770 = chunk__44757_44763;
var G__44771 = count__44758_44764;
var G__44772 = (i__44759_44765 + (1));
seq__44756_44762 = G__44769;
chunk__44757_44763 = G__44770;
count__44758_44764 = G__44771;
i__44759_44765 = G__44772;
continue;
}
} else
{var temp__4126__auto___44773 = cljs.core.seq(seq__44756_44762);if(temp__4126__auto___44773)
{var seq__44756_44774__$1 = temp__4126__auto___44773;if(cljs.core.chunked_seq_QMARK_(seq__44756_44774__$1))
{var c__4299__auto___44775 = cljs.core.chunk_first(seq__44756_44774__$1);{
var G__44776 = cljs.core.chunk_rest(seq__44756_44774__$1);
var G__44777 = c__4299__auto___44775;
var G__44778 = cljs.core.count(c__4299__auto___44775);
var G__44779 = (0);
seq__44756_44762 = G__44776;
chunk__44757_44763 = G__44777;
count__44758_44764 = G__44778;
i__44759_44765 = G__44779;
continue;
}
} else
{var vec__44761_44780 = cljs.core.first(seq__44756_44774__$1);var name_44781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44761_44780,(0),null);var value_44782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44761_44780,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44781,cljs.core.array_seq([value_44782], 0));
{
var G__44783 = cljs.core.next(seq__44756_44774__$1);
var G__44784 = null;
var G__44785 = (0);
var G__44786 = (0);
seq__44756_44762 = G__44783;
chunk__44757_44763 = G__44784;
count__44758_44764 = G__44785;
i__44759_44765 = G__44786;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__44793_44799 = cljs.core.seq(attrs);var chunk__44794_44800 = null;var count__44795_44801 = (0);var i__44796_44802 = (0);while(true){
if((i__44796_44802 < count__44795_44801))
{var vec__44797_44803 = chunk__44794_44800.cljs$core$IIndexed$_nth$arity$2(null,i__44796_44802);var name_44804 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44797_44803,(0),null);var value_44805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44797_44803,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44804,cljs.core.array_seq([value_44805], 0));
{
var G__44806 = seq__44793_44799;
var G__44807 = chunk__44794_44800;
var G__44808 = count__44795_44801;
var G__44809 = (i__44796_44802 + (1));
seq__44793_44799 = G__44806;
chunk__44794_44800 = G__44807;
count__44795_44801 = G__44808;
i__44796_44802 = G__44809;
continue;
}
} else
{var temp__4126__auto___44810 = cljs.core.seq(seq__44793_44799);if(temp__4126__auto___44810)
{var seq__44793_44811__$1 = temp__4126__auto___44810;if(cljs.core.chunked_seq_QMARK_(seq__44793_44811__$1))
{var c__4299__auto___44812 = cljs.core.chunk_first(seq__44793_44811__$1);{
var G__44813 = cljs.core.chunk_rest(seq__44793_44811__$1);
var G__44814 = c__4299__auto___44812;
var G__44815 = cljs.core.count(c__4299__auto___44812);
var G__44816 = (0);
seq__44793_44799 = G__44813;
chunk__44794_44800 = G__44814;
count__44795_44801 = G__44815;
i__44796_44802 = G__44816;
continue;
}
} else
{var vec__44798_44817 = cljs.core.first(seq__44793_44811__$1);var name_44818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44798_44817,(0),null);var value_44819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44798_44817,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_44818,cljs.core.array_seq([value_44819], 0));
{
var G__44820 = cljs.core.next(seq__44793_44811__$1);
var G__44821 = null;
var G__44822 = (0);
var G__44823 = (0);
seq__44793_44799 = G__44820;
chunk__44794_44800 = G__44821;
count__44795_44801 = G__44822;
i__44796_44802 = G__44823;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__44828_44832 = cljs.core.seq(domina.nodes(content));var chunk__44829_44833 = null;var count__44830_44834 = (0);var i__44831_44835 = (0);while(true){
if((i__44831_44835 < count__44830_44834))
{var node_44836 = chunk__44829_44833.cljs$core$IIndexed$_nth$arity$2(null,i__44831_44835);goog.dom.classes.add(node_44836,class$);
{
var G__44837 = seq__44828_44832;
var G__44838 = chunk__44829_44833;
var G__44839 = count__44830_44834;
var G__44840 = (i__44831_44835 + (1));
seq__44828_44832 = G__44837;
chunk__44829_44833 = G__44838;
count__44830_44834 = G__44839;
i__44831_44835 = G__44840;
continue;
}
} else
{var temp__4126__auto___44841 = cljs.core.seq(seq__44828_44832);if(temp__4126__auto___44841)
{var seq__44828_44842__$1 = temp__4126__auto___44841;if(cljs.core.chunked_seq_QMARK_(seq__44828_44842__$1))
{var c__4299__auto___44843 = cljs.core.chunk_first(seq__44828_44842__$1);{
var G__44844 = cljs.core.chunk_rest(seq__44828_44842__$1);
var G__44845 = c__4299__auto___44843;
var G__44846 = cljs.core.count(c__4299__auto___44843);
var G__44847 = (0);
seq__44828_44832 = G__44844;
chunk__44829_44833 = G__44845;
count__44830_44834 = G__44846;
i__44831_44835 = G__44847;
continue;
}
} else
{var node_44848 = cljs.core.first(seq__44828_44842__$1);goog.dom.classes.add(node_44848,class$);
{
var G__44849 = cljs.core.next(seq__44828_44842__$1);
var G__44850 = null;
var G__44851 = (0);
var G__44852 = (0);
seq__44828_44832 = G__44849;
chunk__44829_44833 = G__44850;
count__44830_44834 = G__44851;
i__44831_44835 = G__44852;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__44857_44861 = cljs.core.seq(domina.nodes(content));var chunk__44858_44862 = null;var count__44859_44863 = (0);var i__44860_44864 = (0);while(true){
if((i__44860_44864 < count__44859_44863))
{var node_44865 = chunk__44858_44862.cljs$core$IIndexed$_nth$arity$2(null,i__44860_44864);goog.dom.classes.remove(node_44865,class$);
{
var G__44866 = seq__44857_44861;
var G__44867 = chunk__44858_44862;
var G__44868 = count__44859_44863;
var G__44869 = (i__44860_44864 + (1));
seq__44857_44861 = G__44866;
chunk__44858_44862 = G__44867;
count__44859_44863 = G__44868;
i__44860_44864 = G__44869;
continue;
}
} else
{var temp__4126__auto___44870 = cljs.core.seq(seq__44857_44861);if(temp__4126__auto___44870)
{var seq__44857_44871__$1 = temp__4126__auto___44870;if(cljs.core.chunked_seq_QMARK_(seq__44857_44871__$1))
{var c__4299__auto___44872 = cljs.core.chunk_first(seq__44857_44871__$1);{
var G__44873 = cljs.core.chunk_rest(seq__44857_44871__$1);
var G__44874 = c__4299__auto___44872;
var G__44875 = cljs.core.count(c__4299__auto___44872);
var G__44876 = (0);
seq__44857_44861 = G__44873;
chunk__44858_44862 = G__44874;
count__44859_44863 = G__44875;
i__44860_44864 = G__44876;
continue;
}
} else
{var node_44877 = cljs.core.first(seq__44857_44871__$1);goog.dom.classes.remove(node_44877,class$);
{
var G__44878 = cljs.core.next(seq__44857_44871__$1);
var G__44879 = null;
var G__44880 = (0);
var G__44881 = (0);
seq__44857_44861 = G__44878;
chunk__44858_44862 = G__44879;
count__44859_44863 = G__44880;
i__44860_44864 = G__44881;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44886_44890 = cljs.core.seq(domina.nodes(content));var chunk__44887_44891 = null;var count__44888_44892 = (0);var i__44889_44893 = (0);while(true){
if((i__44889_44893 < count__44888_44892))
{var node_44894 = chunk__44887_44891.cljs$core$IIndexed$_nth$arity$2(null,i__44889_44893);goog.dom.classes.toggle(node_44894,class$);
{
var G__44895 = seq__44886_44890;
var G__44896 = chunk__44887_44891;
var G__44897 = count__44888_44892;
var G__44898 = (i__44889_44893 + (1));
seq__44886_44890 = G__44895;
chunk__44887_44891 = G__44896;
count__44888_44892 = G__44897;
i__44889_44893 = G__44898;
continue;
}
} else
{var temp__4126__auto___44899 = cljs.core.seq(seq__44886_44890);if(temp__4126__auto___44899)
{var seq__44886_44900__$1 = temp__4126__auto___44899;if(cljs.core.chunked_seq_QMARK_(seq__44886_44900__$1))
{var c__4299__auto___44901 = cljs.core.chunk_first(seq__44886_44900__$1);{
var G__44902 = cljs.core.chunk_rest(seq__44886_44900__$1);
var G__44903 = c__4299__auto___44901;
var G__44904 = cljs.core.count(c__4299__auto___44901);
var G__44905 = (0);
seq__44886_44890 = G__44902;
chunk__44887_44891 = G__44903;
count__44888_44892 = G__44904;
i__44889_44893 = G__44905;
continue;
}
} else
{var node_44906 = cljs.core.first(seq__44886_44900__$1);goog.dom.classes.toggle(node_44906,class$);
{
var G__44907 = cljs.core.next(seq__44886_44900__$1);
var G__44908 = null;
var G__44909 = (0);
var G__44910 = (0);
seq__44886_44890 = G__44907;
chunk__44887_44891 = G__44908;
count__44888_44892 = G__44909;
i__44889_44893 = G__44910;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44919__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__44915_44920 = cljs.core.seq(domina.nodes(content));var chunk__44916_44921 = null;var count__44917_44922 = (0);var i__44918_44923 = (0);while(true){
if((i__44918_44923 < count__44917_44922))
{var node_44924 = chunk__44916_44921.cljs$core$IIndexed$_nth$arity$2(null,i__44918_44923);goog.dom.classes.set(node_44924,classes_44919__$1);
{
var G__44925 = seq__44915_44920;
var G__44926 = chunk__44916_44921;
var G__44927 = count__44917_44922;
var G__44928 = (i__44918_44923 + (1));
seq__44915_44920 = G__44925;
chunk__44916_44921 = G__44926;
count__44917_44922 = G__44927;
i__44918_44923 = G__44928;
continue;
}
} else
{var temp__4126__auto___44929 = cljs.core.seq(seq__44915_44920);if(temp__4126__auto___44929)
{var seq__44915_44930__$1 = temp__4126__auto___44929;if(cljs.core.chunked_seq_QMARK_(seq__44915_44930__$1))
{var c__4299__auto___44931 = cljs.core.chunk_first(seq__44915_44930__$1);{
var G__44932 = cljs.core.chunk_rest(seq__44915_44930__$1);
var G__44933 = c__4299__auto___44931;
var G__44934 = cljs.core.count(c__4299__auto___44931);
var G__44935 = (0);
seq__44915_44920 = G__44932;
chunk__44916_44921 = G__44933;
count__44917_44922 = G__44934;
i__44918_44923 = G__44935;
continue;
}
} else
{var node_44936 = cljs.core.first(seq__44915_44930__$1);goog.dom.classes.set(node_44936,classes_44919__$1);
{
var G__44937 = cljs.core.next(seq__44915_44930__$1);
var G__44938 = null;
var G__44939 = (0);
var G__44940 = (0);
seq__44915_44920 = G__44937;
chunk__44916_44921 = G__44938;
count__44917_44922 = G__44939;
i__44918_44923 = G__44940;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44945_44949 = cljs.core.seq(domina.nodes(content));var chunk__44946_44950 = null;var count__44947_44951 = (0);var i__44948_44952 = (0);while(true){
if((i__44948_44952 < count__44947_44951))
{var node_44953 = chunk__44946_44950.cljs$core$IIndexed$_nth$arity$2(null,i__44948_44952);goog.dom.setTextContent(node_44953,value);
{
var G__44954 = seq__44945_44949;
var G__44955 = chunk__44946_44950;
var G__44956 = count__44947_44951;
var G__44957 = (i__44948_44952 + (1));
seq__44945_44949 = G__44954;
chunk__44946_44950 = G__44955;
count__44947_44951 = G__44956;
i__44948_44952 = G__44957;
continue;
}
} else
{var temp__4126__auto___44958 = cljs.core.seq(seq__44945_44949);if(temp__4126__auto___44958)
{var seq__44945_44959__$1 = temp__4126__auto___44958;if(cljs.core.chunked_seq_QMARK_(seq__44945_44959__$1))
{var c__4299__auto___44960 = cljs.core.chunk_first(seq__44945_44959__$1);{
var G__44961 = cljs.core.chunk_rest(seq__44945_44959__$1);
var G__44962 = c__4299__auto___44960;
var G__44963 = cljs.core.count(c__4299__auto___44960);
var G__44964 = (0);
seq__44945_44949 = G__44961;
chunk__44946_44950 = G__44962;
count__44947_44951 = G__44963;
i__44948_44952 = G__44964;
continue;
}
} else
{var node_44965 = cljs.core.first(seq__44945_44959__$1);goog.dom.setTextContent(node_44965,value);
{
var G__44966 = cljs.core.next(seq__44945_44959__$1);
var G__44967 = null;
var G__44968 = (0);
var G__44969 = (0);
seq__44945_44949 = G__44966;
chunk__44946_44950 = G__44967;
count__44947_44951 = G__44968;
i__44948_44952 = G__44969;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44974_44978 = cljs.core.seq(domina.nodes(content));var chunk__44975_44979 = null;var count__44976_44980 = (0);var i__44977_44981 = (0);while(true){
if((i__44977_44981 < count__44976_44980))
{var node_44982 = chunk__44975_44979.cljs$core$IIndexed$_nth$arity$2(null,i__44977_44981);goog.dom.forms.setValue(node_44982,value);
{
var G__44983 = seq__44974_44978;
var G__44984 = chunk__44975_44979;
var G__44985 = count__44976_44980;
var G__44986 = (i__44977_44981 + (1));
seq__44974_44978 = G__44983;
chunk__44975_44979 = G__44984;
count__44976_44980 = G__44985;
i__44977_44981 = G__44986;
continue;
}
} else
{var temp__4126__auto___44987 = cljs.core.seq(seq__44974_44978);if(temp__4126__auto___44987)
{var seq__44974_44988__$1 = temp__4126__auto___44987;if(cljs.core.chunked_seq_QMARK_(seq__44974_44988__$1))
{var c__4299__auto___44989 = cljs.core.chunk_first(seq__44974_44988__$1);{
var G__44990 = cljs.core.chunk_rest(seq__44974_44988__$1);
var G__44991 = c__4299__auto___44989;
var G__44992 = cljs.core.count(c__4299__auto___44989);
var G__44993 = (0);
seq__44974_44978 = G__44990;
chunk__44975_44979 = G__44991;
count__44976_44980 = G__44992;
i__44977_44981 = G__44993;
continue;
}
} else
{var node_44994 = cljs.core.first(seq__44974_44988__$1);goog.dom.forms.setValue(node_44994,value);
{
var G__44995 = cljs.core.next(seq__44974_44988__$1);
var G__44996 = null;
var G__44997 = (0);
var G__44998 = (0);
seq__44974_44978 = G__44995;
chunk__44975_44979 = G__44996;
count__44976_44980 = G__44997;
i__44977_44981 = G__44998;
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
{var value_45009 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__45005_45010 = cljs.core.seq(domina.nodes(content));var chunk__45006_45011 = null;var count__45007_45012 = (0);var i__45008_45013 = (0);while(true){
if((i__45008_45013 < count__45007_45012))
{var node_45014 = chunk__45006_45011.cljs$core$IIndexed$_nth$arity$2(null,i__45008_45013);node_45014.innerHTML = value_45009;
{
var G__45015 = seq__45005_45010;
var G__45016 = chunk__45006_45011;
var G__45017 = count__45007_45012;
var G__45018 = (i__45008_45013 + (1));
seq__45005_45010 = G__45015;
chunk__45006_45011 = G__45016;
count__45007_45012 = G__45017;
i__45008_45013 = G__45018;
continue;
}
} else
{var temp__4126__auto___45019 = cljs.core.seq(seq__45005_45010);if(temp__4126__auto___45019)
{var seq__45005_45020__$1 = temp__4126__auto___45019;if(cljs.core.chunked_seq_QMARK_(seq__45005_45020__$1))
{var c__4299__auto___45021 = cljs.core.chunk_first(seq__45005_45020__$1);{
var G__45022 = cljs.core.chunk_rest(seq__45005_45020__$1);
var G__45023 = c__4299__auto___45021;
var G__45024 = cljs.core.count(c__4299__auto___45021);
var G__45025 = (0);
seq__45005_45010 = G__45022;
chunk__45006_45011 = G__45023;
count__45007_45012 = G__45024;
i__45008_45013 = G__45025;
continue;
}
} else
{var node_45026 = cljs.core.first(seq__45005_45020__$1);node_45026.innerHTML = value_45009;
{
var G__45027 = cljs.core.next(seq__45005_45020__$1);
var G__45028 = null;
var G__45029 = (0);
var G__45030 = (0);
seq__45005_45010 = G__45027;
chunk__45006_45011 = G__45028;
count__45007_45012 = G__45029;
i__45008_45013 = G__45030;
continue;
}
}
} else
{}
}
break;
}
}catch (e45004){if((e45004 instanceof Error))
{var e_45031 = e45004;domina.replace_children_BANG_(content,value_45009);
} else
{if(cljs.core.constant$keyword$764)
{throw e45004;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__45038_45042 = cljs.core.seq(children);var chunk__45039_45043 = null;var count__45040_45044 = (0);var i__45041_45045 = (0);while(true){
if((i__45041_45045 < count__45040_45044))
{var child_45046 = chunk__45039_45043.cljs$core$IIndexed$_nth$arity$2(null,i__45041_45045);frag.appendChild(child_45046);
{
var G__45047 = seq__45038_45042;
var G__45048 = chunk__45039_45043;
var G__45049 = count__45040_45044;
var G__45050 = (i__45041_45045 + (1));
seq__45038_45042 = G__45047;
chunk__45039_45043 = G__45048;
count__45040_45044 = G__45049;
i__45041_45045 = G__45050;
continue;
}
} else
{var temp__4126__auto___45051 = cljs.core.seq(seq__45038_45042);if(temp__4126__auto___45051)
{var seq__45038_45052__$1 = temp__4126__auto___45051;if(cljs.core.chunked_seq_QMARK_(seq__45038_45052__$1))
{var c__4299__auto___45053 = cljs.core.chunk_first(seq__45038_45052__$1);{
var G__45054 = cljs.core.chunk_rest(seq__45038_45052__$1);
var G__45055 = c__4299__auto___45053;
var G__45056 = cljs.core.count(c__4299__auto___45053);
var G__45057 = (0);
seq__45038_45042 = G__45054;
chunk__45039_45043 = G__45055;
count__45040_45044 = G__45056;
i__45041_45045 = G__45057;
continue;
}
} else
{var child_45058 = cljs.core.first(seq__45038_45052__$1);frag.appendChild(child_45058);
{
var G__45059 = cljs.core.next(seq__45038_45052__$1);
var G__45060 = null;
var G__45061 = (0);
var G__45062 = (0);
seq__45038_45042 = G__45059;
chunk__45039_45043 = G__45060;
count__45040_45044 = G__45061;
i__45041_45045 = G__45062;
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
return (function (p1__45032_SHARP_,p2__45033_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__45032_SHARP_,p2__45033_SHARP_) : f.call(null,p1__45032_SHARP_,p2__45033_SHARP_));
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
{if((function (){var G__45064 = list_thing;if(G__45064)
{var bit__4193__auto__ = (G__45064.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__45064.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45064.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45064);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45064);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$765)
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
{if((function (){var G__45065 = content;if(G__45065)
{var bit__4193__auto__ = (G__45065.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__45065.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45065.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45065);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45065);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$765)
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
{if((function (){var G__45066 = content;if(G__45066)
{var bit__4193__auto__ = (G__45066.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__45066.cljs$core$ISeqable$))
{return true;
} else
{if((!G__45066.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45066);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__45066);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$765)
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
