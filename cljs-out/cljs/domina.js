// Compiled by ClojureScript 0.0-2080
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_18704 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18705 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_18706 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_18705,table_section_wrapper_18705,opt_wrapper_18704,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_18706,table_section_wrapper_18705,cell_wrapper_18706,opt_wrapper_18704,table_section_wrapper_18705,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_18705]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18711 = cljs.core.seq.call(null,tbody);var chunk__18712 = null;var count__18713 = 0;var i__18714 = 0;while(true){
if((i__18714 < count__18713))
{var child = cljs.core._nth.call(null,chunk__18712,i__18714);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18715 = seq__18711;
var G__18716 = chunk__18712;
var G__18717 = count__18713;
var G__18718 = (i__18714 + 1);
seq__18711 = G__18715;
chunk__18712 = G__18716;
count__18713 = G__18717;
i__18714 = G__18718;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__18711);if(temp__4092__auto__)
{var seq__18711__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18711__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__18711__$1);{
var G__18719 = cljs.core.chunk_rest.call(null,seq__18711__$1);
var G__18720 = c__4015__auto__;
var G__18721 = cljs.core.count.call(null,c__4015__auto__);
var G__18722 = 0;
seq__18711 = G__18719;
chunk__18712 = G__18720;
count__18713 = G__18721;
i__18714 = G__18722;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18711__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18723 = cljs.core.next.call(null,seq__18711__$1);
var G__18724 = null;
var G__18725 = 0;
var G__18726 = 0;
seq__18711 = G__18723;
chunk__18712 = G__18724;
count__18713 = G__18725;
i__18714 = G__18726;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__18728 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18728,0,null);var start_wrap = cljs.core.nth.call(null,vec__18728,1,null);var end_wrap = cljs.core.nth.call(null,vec__18728,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__18729 = wrapper.lastChild;
var G__18730 = (level - 1);
wrapper = G__18729;
level = G__18730;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj18732 = {};return obj18732;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__18733){
var mesg = cljs.core.seq(arglist__18733);
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
log.cljs$lang$applyTo = (function (arglist__18734){
var mesg = cljs.core.seq(arglist__18734);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__18735){
var contents = cljs.core.seq(arglist__18735);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18736_SHARP_){return p1__18736_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18737_SHARP_,p2__18738_SHARP_){return goog.dom.insertChildAt(p1__18737_SHARP_,p2__18738_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18740_SHARP_,p2__18739_SHARP_){return goog.dom.insertSiblingBefore(p2__18739_SHARP_,p1__18740_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18742_SHARP_,p2__18741_SHARP_){return goog.dom.insertSiblingAfter(p2__18741_SHARP_,p1__18742_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18744_SHARP_,p2__18743_SHARP_){return goog.dom.replaceNode(p2__18743_SHARP_,p1__18744_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__18749_18753 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18750_18754 = null;var count__18751_18755 = 0;var i__18752_18756 = 0;while(true){
if((i__18752_18756 < count__18751_18755))
{var n_18757 = cljs.core._nth.call(null,chunk__18750_18754,i__18752_18756);goog.style.setStyle(n_18757,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18758 = seq__18749_18753;
var G__18759 = chunk__18750_18754;
var G__18760 = count__18751_18755;
var G__18761 = (i__18752_18756 + 1);
seq__18749_18753 = G__18758;
chunk__18750_18754 = G__18759;
count__18751_18755 = G__18760;
i__18752_18756 = G__18761;
continue;
}
} else
{var temp__4092__auto___18762 = cljs.core.seq.call(null,seq__18749_18753);if(temp__4092__auto___18762)
{var seq__18749_18763__$1 = temp__4092__auto___18762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18749_18763__$1))
{var c__4015__auto___18764 = cljs.core.chunk_first.call(null,seq__18749_18763__$1);{
var G__18765 = cljs.core.chunk_rest.call(null,seq__18749_18763__$1);
var G__18766 = c__4015__auto___18764;
var G__18767 = cljs.core.count.call(null,c__4015__auto___18764);
var G__18768 = 0;
seq__18749_18753 = G__18765;
chunk__18750_18754 = G__18766;
count__18751_18755 = G__18767;
i__18752_18756 = G__18768;
continue;
}
} else
{var n_18769 = cljs.core.first.call(null,seq__18749_18763__$1);goog.style.setStyle(n_18769,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18770 = cljs.core.next.call(null,seq__18749_18763__$1);
var G__18771 = null;
var G__18772 = 0;
var G__18773 = 0;
seq__18749_18753 = G__18770;
chunk__18750_18754 = G__18771;
count__18751_18755 = G__18772;
i__18752_18756 = G__18773;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18774){
var content = cljs.core.first(arglist__18774);
arglist__18774 = cljs.core.next(arglist__18774);
var name = cljs.core.first(arglist__18774);
var value = cljs.core.rest(arglist__18774);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__18779_18783 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18780_18784 = null;var count__18781_18785 = 0;var i__18782_18786 = 0;while(true){
if((i__18782_18786 < count__18781_18785))
{var n_18787 = cljs.core._nth.call(null,chunk__18780_18784,i__18782_18786);n_18787.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18788 = seq__18779_18783;
var G__18789 = chunk__18780_18784;
var G__18790 = count__18781_18785;
var G__18791 = (i__18782_18786 + 1);
seq__18779_18783 = G__18788;
chunk__18780_18784 = G__18789;
count__18781_18785 = G__18790;
i__18782_18786 = G__18791;
continue;
}
} else
{var temp__4092__auto___18792 = cljs.core.seq.call(null,seq__18779_18783);if(temp__4092__auto___18792)
{var seq__18779_18793__$1 = temp__4092__auto___18792;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18779_18793__$1))
{var c__4015__auto___18794 = cljs.core.chunk_first.call(null,seq__18779_18793__$1);{
var G__18795 = cljs.core.chunk_rest.call(null,seq__18779_18793__$1);
var G__18796 = c__4015__auto___18794;
var G__18797 = cljs.core.count.call(null,c__4015__auto___18794);
var G__18798 = 0;
seq__18779_18783 = G__18795;
chunk__18780_18784 = G__18796;
count__18781_18785 = G__18797;
i__18782_18786 = G__18798;
continue;
}
} else
{var n_18799 = cljs.core.first.call(null,seq__18779_18793__$1);n_18799.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18800 = cljs.core.next.call(null,seq__18779_18793__$1);
var G__18801 = null;
var G__18802 = 0;
var G__18803 = 0;
seq__18779_18783 = G__18800;
chunk__18780_18784 = G__18801;
count__18781_18785 = G__18802;
i__18782_18786 = G__18803;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18804){
var content = cljs.core.first(arglist__18804);
arglist__18804 = cljs.core.next(arglist__18804);
var name = cljs.core.first(arglist__18804);
var value = cljs.core.rest(arglist__18804);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__18809_18813 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18810_18814 = null;var count__18811_18815 = 0;var i__18812_18816 = 0;while(true){
if((i__18812_18816 < count__18811_18815))
{var n_18817 = cljs.core._nth.call(null,chunk__18810_18814,i__18812_18816);n_18817.removeAttribute(cljs.core.name.call(null,name));
{
var G__18818 = seq__18809_18813;
var G__18819 = chunk__18810_18814;
var G__18820 = count__18811_18815;
var G__18821 = (i__18812_18816 + 1);
seq__18809_18813 = G__18818;
chunk__18810_18814 = G__18819;
count__18811_18815 = G__18820;
i__18812_18816 = G__18821;
continue;
}
} else
{var temp__4092__auto___18822 = cljs.core.seq.call(null,seq__18809_18813);if(temp__4092__auto___18822)
{var seq__18809_18823__$1 = temp__4092__auto___18822;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18809_18823__$1))
{var c__4015__auto___18824 = cljs.core.chunk_first.call(null,seq__18809_18823__$1);{
var G__18825 = cljs.core.chunk_rest.call(null,seq__18809_18823__$1);
var G__18826 = c__4015__auto___18824;
var G__18827 = cljs.core.count.call(null,c__4015__auto___18824);
var G__18828 = 0;
seq__18809_18813 = G__18825;
chunk__18810_18814 = G__18826;
count__18811_18815 = G__18827;
i__18812_18816 = G__18828;
continue;
}
} else
{var n_18829 = cljs.core.first.call(null,seq__18809_18823__$1);n_18829.removeAttribute(cljs.core.name.call(null,name));
{
var G__18830 = cljs.core.next.call(null,seq__18809_18823__$1);
var G__18831 = null;
var G__18832 = 0;
var G__18833 = 0;
seq__18809_18813 = G__18830;
chunk__18810_18814 = G__18831;
count__18811_18815 = G__18832;
i__18812_18816 = G__18833;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18835 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18835,0,null);var v = cljs.core.nth.call(null,vec__18835,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__18836_SHARP_){var attr = attrs__$1.item(p1__18836_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18843_18849 = cljs.core.seq.call(null,styles);var chunk__18844_18850 = null;var count__18845_18851 = 0;var i__18846_18852 = 0;while(true){
if((i__18846_18852 < count__18845_18851))
{var vec__18847_18853 = cljs.core._nth.call(null,chunk__18844_18850,i__18846_18852);var name_18854 = cljs.core.nth.call(null,vec__18847_18853,0,null);var value_18855 = cljs.core.nth.call(null,vec__18847_18853,1,null);domina.set_style_BANG_.call(null,content,name_18854,value_18855);
{
var G__18856 = seq__18843_18849;
var G__18857 = chunk__18844_18850;
var G__18858 = count__18845_18851;
var G__18859 = (i__18846_18852 + 1);
seq__18843_18849 = G__18856;
chunk__18844_18850 = G__18857;
count__18845_18851 = G__18858;
i__18846_18852 = G__18859;
continue;
}
} else
{var temp__4092__auto___18860 = cljs.core.seq.call(null,seq__18843_18849);if(temp__4092__auto___18860)
{var seq__18843_18861__$1 = temp__4092__auto___18860;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18843_18861__$1))
{var c__4015__auto___18862 = cljs.core.chunk_first.call(null,seq__18843_18861__$1);{
var G__18863 = cljs.core.chunk_rest.call(null,seq__18843_18861__$1);
var G__18864 = c__4015__auto___18862;
var G__18865 = cljs.core.count.call(null,c__4015__auto___18862);
var G__18866 = 0;
seq__18843_18849 = G__18863;
chunk__18844_18850 = G__18864;
count__18845_18851 = G__18865;
i__18846_18852 = G__18866;
continue;
}
} else
{var vec__18848_18867 = cljs.core.first.call(null,seq__18843_18861__$1);var name_18868 = cljs.core.nth.call(null,vec__18848_18867,0,null);var value_18869 = cljs.core.nth.call(null,vec__18848_18867,1,null);domina.set_style_BANG_.call(null,content,name_18868,value_18869);
{
var G__18870 = cljs.core.next.call(null,seq__18843_18861__$1);
var G__18871 = null;
var G__18872 = 0;
var G__18873 = 0;
seq__18843_18849 = G__18870;
chunk__18844_18850 = G__18871;
count__18845_18851 = G__18872;
i__18846_18852 = G__18873;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18880_18886 = cljs.core.seq.call(null,attrs);var chunk__18881_18887 = null;var count__18882_18888 = 0;var i__18883_18889 = 0;while(true){
if((i__18883_18889 < count__18882_18888))
{var vec__18884_18890 = cljs.core._nth.call(null,chunk__18881_18887,i__18883_18889);var name_18891 = cljs.core.nth.call(null,vec__18884_18890,0,null);var value_18892 = cljs.core.nth.call(null,vec__18884_18890,1,null);domina.set_attr_BANG_.call(null,content,name_18891,value_18892);
{
var G__18893 = seq__18880_18886;
var G__18894 = chunk__18881_18887;
var G__18895 = count__18882_18888;
var G__18896 = (i__18883_18889 + 1);
seq__18880_18886 = G__18893;
chunk__18881_18887 = G__18894;
count__18882_18888 = G__18895;
i__18883_18889 = G__18896;
continue;
}
} else
{var temp__4092__auto___18897 = cljs.core.seq.call(null,seq__18880_18886);if(temp__4092__auto___18897)
{var seq__18880_18898__$1 = temp__4092__auto___18897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18880_18898__$1))
{var c__4015__auto___18899 = cljs.core.chunk_first.call(null,seq__18880_18898__$1);{
var G__18900 = cljs.core.chunk_rest.call(null,seq__18880_18898__$1);
var G__18901 = c__4015__auto___18899;
var G__18902 = cljs.core.count.call(null,c__4015__auto___18899);
var G__18903 = 0;
seq__18880_18886 = G__18900;
chunk__18881_18887 = G__18901;
count__18882_18888 = G__18902;
i__18883_18889 = G__18903;
continue;
}
} else
{var vec__18885_18904 = cljs.core.first.call(null,seq__18880_18898__$1);var name_18905 = cljs.core.nth.call(null,vec__18885_18904,0,null);var value_18906 = cljs.core.nth.call(null,vec__18885_18904,1,null);domina.set_attr_BANG_.call(null,content,name_18905,value_18906);
{
var G__18907 = cljs.core.next.call(null,seq__18880_18898__$1);
var G__18908 = null;
var G__18909 = 0;
var G__18910 = 0;
seq__18880_18886 = G__18907;
chunk__18881_18887 = G__18908;
count__18882_18888 = G__18909;
i__18883_18889 = G__18910;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18915_18919 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18916_18920 = null;var count__18917_18921 = 0;var i__18918_18922 = 0;while(true){
if((i__18918_18922 < count__18917_18921))
{var node_18923 = cljs.core._nth.call(null,chunk__18916_18920,i__18918_18922);goog.dom.classes.add(node_18923,class$);
{
var G__18924 = seq__18915_18919;
var G__18925 = chunk__18916_18920;
var G__18926 = count__18917_18921;
var G__18927 = (i__18918_18922 + 1);
seq__18915_18919 = G__18924;
chunk__18916_18920 = G__18925;
count__18917_18921 = G__18926;
i__18918_18922 = G__18927;
continue;
}
} else
{var temp__4092__auto___18928 = cljs.core.seq.call(null,seq__18915_18919);if(temp__4092__auto___18928)
{var seq__18915_18929__$1 = temp__4092__auto___18928;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18915_18929__$1))
{var c__4015__auto___18930 = cljs.core.chunk_first.call(null,seq__18915_18929__$1);{
var G__18931 = cljs.core.chunk_rest.call(null,seq__18915_18929__$1);
var G__18932 = c__4015__auto___18930;
var G__18933 = cljs.core.count.call(null,c__4015__auto___18930);
var G__18934 = 0;
seq__18915_18919 = G__18931;
chunk__18916_18920 = G__18932;
count__18917_18921 = G__18933;
i__18918_18922 = G__18934;
continue;
}
} else
{var node_18935 = cljs.core.first.call(null,seq__18915_18929__$1);goog.dom.classes.add(node_18935,class$);
{
var G__18936 = cljs.core.next.call(null,seq__18915_18929__$1);
var G__18937 = null;
var G__18938 = 0;
var G__18939 = 0;
seq__18915_18919 = G__18936;
chunk__18916_18920 = G__18937;
count__18917_18921 = G__18938;
i__18918_18922 = G__18939;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18944_18948 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18945_18949 = null;var count__18946_18950 = 0;var i__18947_18951 = 0;while(true){
if((i__18947_18951 < count__18946_18950))
{var node_18952 = cljs.core._nth.call(null,chunk__18945_18949,i__18947_18951);goog.dom.classes.remove(node_18952,class$);
{
var G__18953 = seq__18944_18948;
var G__18954 = chunk__18945_18949;
var G__18955 = count__18946_18950;
var G__18956 = (i__18947_18951 + 1);
seq__18944_18948 = G__18953;
chunk__18945_18949 = G__18954;
count__18946_18950 = G__18955;
i__18947_18951 = G__18956;
continue;
}
} else
{var temp__4092__auto___18957 = cljs.core.seq.call(null,seq__18944_18948);if(temp__4092__auto___18957)
{var seq__18944_18958__$1 = temp__4092__auto___18957;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18944_18958__$1))
{var c__4015__auto___18959 = cljs.core.chunk_first.call(null,seq__18944_18958__$1);{
var G__18960 = cljs.core.chunk_rest.call(null,seq__18944_18958__$1);
var G__18961 = c__4015__auto___18959;
var G__18962 = cljs.core.count.call(null,c__4015__auto___18959);
var G__18963 = 0;
seq__18944_18948 = G__18960;
chunk__18945_18949 = G__18961;
count__18946_18950 = G__18962;
i__18947_18951 = G__18963;
continue;
}
} else
{var node_18964 = cljs.core.first.call(null,seq__18944_18958__$1);goog.dom.classes.remove(node_18964,class$);
{
var G__18965 = cljs.core.next.call(null,seq__18944_18958__$1);
var G__18966 = null;
var G__18967 = 0;
var G__18968 = 0;
seq__18944_18948 = G__18965;
chunk__18945_18949 = G__18966;
count__18946_18950 = G__18967;
i__18947_18951 = G__18968;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18973_18977 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18974_18978 = null;var count__18975_18979 = 0;var i__18976_18980 = 0;while(true){
if((i__18976_18980 < count__18975_18979))
{var node_18981 = cljs.core._nth.call(null,chunk__18974_18978,i__18976_18980);goog.dom.classes.toggle(node_18981,class$);
{
var G__18982 = seq__18973_18977;
var G__18983 = chunk__18974_18978;
var G__18984 = count__18975_18979;
var G__18985 = (i__18976_18980 + 1);
seq__18973_18977 = G__18982;
chunk__18974_18978 = G__18983;
count__18975_18979 = G__18984;
i__18976_18980 = G__18985;
continue;
}
} else
{var temp__4092__auto___18986 = cljs.core.seq.call(null,seq__18973_18977);if(temp__4092__auto___18986)
{var seq__18973_18987__$1 = temp__4092__auto___18986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18973_18987__$1))
{var c__4015__auto___18988 = cljs.core.chunk_first.call(null,seq__18973_18987__$1);{
var G__18989 = cljs.core.chunk_rest.call(null,seq__18973_18987__$1);
var G__18990 = c__4015__auto___18988;
var G__18991 = cljs.core.count.call(null,c__4015__auto___18988);
var G__18992 = 0;
seq__18973_18977 = G__18989;
chunk__18974_18978 = G__18990;
count__18975_18979 = G__18991;
i__18976_18980 = G__18992;
continue;
}
} else
{var node_18993 = cljs.core.first.call(null,seq__18973_18987__$1);goog.dom.classes.toggle(node_18993,class$);
{
var G__18994 = cljs.core.next.call(null,seq__18973_18987__$1);
var G__18995 = null;
var G__18996 = 0;
var G__18997 = 0;
seq__18973_18977 = G__18994;
chunk__18974_18978 = G__18995;
count__18975_18979 = G__18996;
i__18976_18980 = G__18997;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19006__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19002_19007 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19003_19008 = null;var count__19004_19009 = 0;var i__19005_19010 = 0;while(true){
if((i__19005_19010 < count__19004_19009))
{var node_19011 = cljs.core._nth.call(null,chunk__19003_19008,i__19005_19010);goog.dom.classes.set(node_19011,classes_19006__$1);
{
var G__19012 = seq__19002_19007;
var G__19013 = chunk__19003_19008;
var G__19014 = count__19004_19009;
var G__19015 = (i__19005_19010 + 1);
seq__19002_19007 = G__19012;
chunk__19003_19008 = G__19013;
count__19004_19009 = G__19014;
i__19005_19010 = G__19015;
continue;
}
} else
{var temp__4092__auto___19016 = cljs.core.seq.call(null,seq__19002_19007);if(temp__4092__auto___19016)
{var seq__19002_19017__$1 = temp__4092__auto___19016;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19002_19017__$1))
{var c__4015__auto___19018 = cljs.core.chunk_first.call(null,seq__19002_19017__$1);{
var G__19019 = cljs.core.chunk_rest.call(null,seq__19002_19017__$1);
var G__19020 = c__4015__auto___19018;
var G__19021 = cljs.core.count.call(null,c__4015__auto___19018);
var G__19022 = 0;
seq__19002_19007 = G__19019;
chunk__19003_19008 = G__19020;
count__19004_19009 = G__19021;
i__19005_19010 = G__19022;
continue;
}
} else
{var node_19023 = cljs.core.first.call(null,seq__19002_19017__$1);goog.dom.classes.set(node_19023,classes_19006__$1);
{
var G__19024 = cljs.core.next.call(null,seq__19002_19017__$1);
var G__19025 = null;
var G__19026 = 0;
var G__19027 = 0;
seq__19002_19007 = G__19024;
chunk__19003_19008 = G__19025;
count__19004_19009 = G__19026;
i__19005_19010 = G__19027;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19032_19036 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19033_19037 = null;var count__19034_19038 = 0;var i__19035_19039 = 0;while(true){
if((i__19035_19039 < count__19034_19038))
{var node_19040 = cljs.core._nth.call(null,chunk__19033_19037,i__19035_19039);goog.dom.setTextContent(node_19040,value);
{
var G__19041 = seq__19032_19036;
var G__19042 = chunk__19033_19037;
var G__19043 = count__19034_19038;
var G__19044 = (i__19035_19039 + 1);
seq__19032_19036 = G__19041;
chunk__19033_19037 = G__19042;
count__19034_19038 = G__19043;
i__19035_19039 = G__19044;
continue;
}
} else
{var temp__4092__auto___19045 = cljs.core.seq.call(null,seq__19032_19036);if(temp__4092__auto___19045)
{var seq__19032_19046__$1 = temp__4092__auto___19045;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19032_19046__$1))
{var c__4015__auto___19047 = cljs.core.chunk_first.call(null,seq__19032_19046__$1);{
var G__19048 = cljs.core.chunk_rest.call(null,seq__19032_19046__$1);
var G__19049 = c__4015__auto___19047;
var G__19050 = cljs.core.count.call(null,c__4015__auto___19047);
var G__19051 = 0;
seq__19032_19036 = G__19048;
chunk__19033_19037 = G__19049;
count__19034_19038 = G__19050;
i__19035_19039 = G__19051;
continue;
}
} else
{var node_19052 = cljs.core.first.call(null,seq__19032_19046__$1);goog.dom.setTextContent(node_19052,value);
{
var G__19053 = cljs.core.next.call(null,seq__19032_19046__$1);
var G__19054 = null;
var G__19055 = 0;
var G__19056 = 0;
seq__19032_19036 = G__19053;
chunk__19033_19037 = G__19054;
count__19034_19038 = G__19055;
i__19035_19039 = G__19056;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19061_19065 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19062_19066 = null;var count__19063_19067 = 0;var i__19064_19068 = 0;while(true){
if((i__19064_19068 < count__19063_19067))
{var node_19069 = cljs.core._nth.call(null,chunk__19062_19066,i__19064_19068);goog.dom.forms.setValue(node_19069,value);
{
var G__19070 = seq__19061_19065;
var G__19071 = chunk__19062_19066;
var G__19072 = count__19063_19067;
var G__19073 = (i__19064_19068 + 1);
seq__19061_19065 = G__19070;
chunk__19062_19066 = G__19071;
count__19063_19067 = G__19072;
i__19064_19068 = G__19073;
continue;
}
} else
{var temp__4092__auto___19074 = cljs.core.seq.call(null,seq__19061_19065);if(temp__4092__auto___19074)
{var seq__19061_19075__$1 = temp__4092__auto___19074;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19061_19075__$1))
{var c__4015__auto___19076 = cljs.core.chunk_first.call(null,seq__19061_19075__$1);{
var G__19077 = cljs.core.chunk_rest.call(null,seq__19061_19075__$1);
var G__19078 = c__4015__auto___19076;
var G__19079 = cljs.core.count.call(null,c__4015__auto___19076);
var G__19080 = 0;
seq__19061_19065 = G__19077;
chunk__19062_19066 = G__19078;
count__19063_19067 = G__19079;
i__19064_19068 = G__19080;
continue;
}
} else
{var node_19081 = cljs.core.first.call(null,seq__19061_19075__$1);goog.dom.forms.setValue(node_19081,value);
{
var G__19082 = cljs.core.next.call(null,seq__19061_19075__$1);
var G__19083 = null;
var G__19084 = 0;
var G__19085 = 0;
seq__19061_19065 = G__19082;
chunk__19062_19066 = G__19083;
count__19063_19067 = G__19084;
i__19064_19068 = G__19085;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_19096 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19092_19097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19093_19098 = null;var count__19094_19099 = 0;var i__19095_19100 = 0;while(true){
if((i__19095_19100 < count__19094_19099))
{var node_19101 = cljs.core._nth.call(null,chunk__19093_19098,i__19095_19100);node_19101.innerHTML = value_19096;
{
var G__19102 = seq__19092_19097;
var G__19103 = chunk__19093_19098;
var G__19104 = count__19094_19099;
var G__19105 = (i__19095_19100 + 1);
seq__19092_19097 = G__19102;
chunk__19093_19098 = G__19103;
count__19094_19099 = G__19104;
i__19095_19100 = G__19105;
continue;
}
} else
{var temp__4092__auto___19106 = cljs.core.seq.call(null,seq__19092_19097);if(temp__4092__auto___19106)
{var seq__19092_19107__$1 = temp__4092__auto___19106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19092_19107__$1))
{var c__4015__auto___19108 = cljs.core.chunk_first.call(null,seq__19092_19107__$1);{
var G__19109 = cljs.core.chunk_rest.call(null,seq__19092_19107__$1);
var G__19110 = c__4015__auto___19108;
var G__19111 = cljs.core.count.call(null,c__4015__auto___19108);
var G__19112 = 0;
seq__19092_19097 = G__19109;
chunk__19093_19098 = G__19110;
count__19094_19099 = G__19111;
i__19095_19100 = G__19112;
continue;
}
} else
{var node_19113 = cljs.core.first.call(null,seq__19092_19107__$1);node_19113.innerHTML = value_19096;
{
var G__19114 = cljs.core.next.call(null,seq__19092_19107__$1);
var G__19115 = null;
var G__19116 = 0;
var G__19117 = 0;
seq__19092_19097 = G__19114;
chunk__19093_19098 = G__19115;
count__19094_19099 = G__19116;
i__19095_19100 = G__19117;
continue;
}
}
} else
{}
}
break;
}
}catch (e19091){if((e19091 instanceof Error))
{var e_19118 = e19091;domina.replace_children_BANG_.call(null,content,value_19096);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19091;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19125_19129 = cljs.core.seq.call(null,children);var chunk__19126_19130 = null;var count__19127_19131 = 0;var i__19128_19132 = 0;while(true){
if((i__19128_19132 < count__19127_19131))
{var child_19133 = cljs.core._nth.call(null,chunk__19126_19130,i__19128_19132);frag.appendChild(child_19133);
{
var G__19134 = seq__19125_19129;
var G__19135 = chunk__19126_19130;
var G__19136 = count__19127_19131;
var G__19137 = (i__19128_19132 + 1);
seq__19125_19129 = G__19134;
chunk__19126_19130 = G__19135;
count__19127_19131 = G__19136;
i__19128_19132 = G__19137;
continue;
}
} else
{var temp__4092__auto___19138 = cljs.core.seq.call(null,seq__19125_19129);if(temp__4092__auto___19138)
{var seq__19125_19139__$1 = temp__4092__auto___19138;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19125_19139__$1))
{var c__4015__auto___19140 = cljs.core.chunk_first.call(null,seq__19125_19139__$1);{
var G__19141 = cljs.core.chunk_rest.call(null,seq__19125_19139__$1);
var G__19142 = c__4015__auto___19140;
var G__19143 = cljs.core.count.call(null,c__4015__auto___19140);
var G__19144 = 0;
seq__19125_19129 = G__19141;
chunk__19126_19130 = G__19142;
count__19127_19131 = G__19143;
i__19128_19132 = G__19144;
continue;
}
} else
{var child_19145 = cljs.core.first.call(null,seq__19125_19139__$1);frag.appendChild(child_19145);
{
var G__19146 = cljs.core.next.call(null,seq__19125_19139__$1);
var G__19147 = null;
var G__19148 = 0;
var G__19149 = 0;
seq__19125_19129 = G__19146;
chunk__19126_19130 = G__19147;
count__19127_19131 = G__19148;
i__19128_19132 = G__19149;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19119_SHARP_,p2__19120_SHARP_){return f.call(null,p1__19119_SHARP_,p2__19120_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__19151 = list_thing;if(G__19151)
{var bit__3917__auto__ = (G__19151.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19151.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19151.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19151);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19151);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__19152 = content;if(G__19152)
{var bit__3917__auto__ = (G__19152.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19152.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19152.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19152);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19152);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__19153 = content;if(G__19153)
{var bit__3917__auto__ = (G__19153.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19153.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19153.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19153);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19153);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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