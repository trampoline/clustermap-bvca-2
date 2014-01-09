// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_32731 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32732 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_32733 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_32732,table_section_wrapper_32732,opt_wrapper_32731,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_32733,table_section_wrapper_32732,cell_wrapper_32733,opt_wrapper_32731,table_section_wrapper_32732,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_32732]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__32738 = cljs.core.seq.call(null,tbody);var chunk__32739 = null;var count__32740 = 0;var i__32741 = 0;while(true){
if((i__32741 < count__32740))
{var child = cljs.core._nth.call(null,chunk__32739,i__32741);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32742 = seq__32738;
var G__32743 = chunk__32739;
var G__32744 = count__32740;
var G__32745 = (i__32741 + 1);
seq__32738 = G__32742;
chunk__32739 = G__32743;
count__32740 = G__32744;
i__32741 = G__32745;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__32738);if(temp__4092__auto__)
{var seq__32738__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32738__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__32738__$1);{
var G__32746 = cljs.core.chunk_rest.call(null,seq__32738__$1);
var G__32747 = c__4148__auto__;
var G__32748 = cljs.core.count.call(null,c__4148__auto__);
var G__32749 = 0;
seq__32738 = G__32746;
chunk__32739 = G__32747;
count__32740 = G__32748;
i__32741 = G__32749;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32738__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32750 = cljs.core.next.call(null,seq__32738__$1);
var G__32751 = null;
var G__32752 = 0;
var G__32753 = 0;
seq__32738 = G__32750;
chunk__32739 = G__32751;
count__32740 = G__32752;
i__32741 = G__32753;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__32755 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__32755,0,null);var start_wrap = cljs.core.nth.call(null,vec__32755,1,null);var end_wrap = cljs.core.nth.call(null,vec__32755,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__32756 = wrapper.lastChild;
var G__32757 = (level - 1);
wrapper = G__32756;
level = G__32757;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj32759 = {};return obj32759;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__32760){
var mesg = cljs.core.seq(arglist__32760);
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
log.cljs$lang$applyTo = (function (arglist__32761){
var mesg = cljs.core.seq(arglist__32761);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32762){
var contents = cljs.core.seq(arglist__32762);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32763_SHARP_){return p1__32763_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32764_SHARP_,p2__32765_SHARP_){return goog.dom.insertChildAt(p1__32764_SHARP_,p2__32765_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32767_SHARP_,p2__32766_SHARP_){return goog.dom.insertSiblingBefore(p2__32766_SHARP_,p1__32767_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32769_SHARP_,p2__32768_SHARP_){return goog.dom.insertSiblingAfter(p2__32768_SHARP_,p1__32769_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32771_SHARP_,p2__32770_SHARP_){return goog.dom.replaceNode(p2__32770_SHARP_,p1__32771_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32776_32780 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32777_32781 = null;var count__32778_32782 = 0;var i__32779_32783 = 0;while(true){
if((i__32779_32783 < count__32778_32782))
{var n_32784 = cljs.core._nth.call(null,chunk__32777_32781,i__32779_32783);goog.style.setStyle(n_32784,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32785 = seq__32776_32780;
var G__32786 = chunk__32777_32781;
var G__32787 = count__32778_32782;
var G__32788 = (i__32779_32783 + 1);
seq__32776_32780 = G__32785;
chunk__32777_32781 = G__32786;
count__32778_32782 = G__32787;
i__32779_32783 = G__32788;
continue;
}
} else
{var temp__4092__auto___32789 = cljs.core.seq.call(null,seq__32776_32780);if(temp__4092__auto___32789)
{var seq__32776_32790__$1 = temp__4092__auto___32789;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32776_32790__$1))
{var c__4148__auto___32791 = cljs.core.chunk_first.call(null,seq__32776_32790__$1);{
var G__32792 = cljs.core.chunk_rest.call(null,seq__32776_32790__$1);
var G__32793 = c__4148__auto___32791;
var G__32794 = cljs.core.count.call(null,c__4148__auto___32791);
var G__32795 = 0;
seq__32776_32780 = G__32792;
chunk__32777_32781 = G__32793;
count__32778_32782 = G__32794;
i__32779_32783 = G__32795;
continue;
}
} else
{var n_32796 = cljs.core.first.call(null,seq__32776_32790__$1);goog.style.setStyle(n_32796,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32797 = cljs.core.next.call(null,seq__32776_32790__$1);
var G__32798 = null;
var G__32799 = 0;
var G__32800 = 0;
seq__32776_32780 = G__32797;
chunk__32777_32781 = G__32798;
count__32778_32782 = G__32799;
i__32779_32783 = G__32800;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32801){
var content = cljs.core.first(arglist__32801);
arglist__32801 = cljs.core.next(arglist__32801);
var name = cljs.core.first(arglist__32801);
var value = cljs.core.rest(arglist__32801);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32806_32810 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32807_32811 = null;var count__32808_32812 = 0;var i__32809_32813 = 0;while(true){
if((i__32809_32813 < count__32808_32812))
{var n_32814 = cljs.core._nth.call(null,chunk__32807_32811,i__32809_32813);n_32814.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32815 = seq__32806_32810;
var G__32816 = chunk__32807_32811;
var G__32817 = count__32808_32812;
var G__32818 = (i__32809_32813 + 1);
seq__32806_32810 = G__32815;
chunk__32807_32811 = G__32816;
count__32808_32812 = G__32817;
i__32809_32813 = G__32818;
continue;
}
} else
{var temp__4092__auto___32819 = cljs.core.seq.call(null,seq__32806_32810);if(temp__4092__auto___32819)
{var seq__32806_32820__$1 = temp__4092__auto___32819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32806_32820__$1))
{var c__4148__auto___32821 = cljs.core.chunk_first.call(null,seq__32806_32820__$1);{
var G__32822 = cljs.core.chunk_rest.call(null,seq__32806_32820__$1);
var G__32823 = c__4148__auto___32821;
var G__32824 = cljs.core.count.call(null,c__4148__auto___32821);
var G__32825 = 0;
seq__32806_32810 = G__32822;
chunk__32807_32811 = G__32823;
count__32808_32812 = G__32824;
i__32809_32813 = G__32825;
continue;
}
} else
{var n_32826 = cljs.core.first.call(null,seq__32806_32820__$1);n_32826.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32827 = cljs.core.next.call(null,seq__32806_32820__$1);
var G__32828 = null;
var G__32829 = 0;
var G__32830 = 0;
seq__32806_32810 = G__32827;
chunk__32807_32811 = G__32828;
count__32808_32812 = G__32829;
i__32809_32813 = G__32830;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32831){
var content = cljs.core.first(arglist__32831);
arglist__32831 = cljs.core.next(arglist__32831);
var name = cljs.core.first(arglist__32831);
var value = cljs.core.rest(arglist__32831);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32836_32840 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32837_32841 = null;var count__32838_32842 = 0;var i__32839_32843 = 0;while(true){
if((i__32839_32843 < count__32838_32842))
{var n_32844 = cljs.core._nth.call(null,chunk__32837_32841,i__32839_32843);n_32844.removeAttribute(cljs.core.name.call(null,name));
{
var G__32845 = seq__32836_32840;
var G__32846 = chunk__32837_32841;
var G__32847 = count__32838_32842;
var G__32848 = (i__32839_32843 + 1);
seq__32836_32840 = G__32845;
chunk__32837_32841 = G__32846;
count__32838_32842 = G__32847;
i__32839_32843 = G__32848;
continue;
}
} else
{var temp__4092__auto___32849 = cljs.core.seq.call(null,seq__32836_32840);if(temp__4092__auto___32849)
{var seq__32836_32850__$1 = temp__4092__auto___32849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32836_32850__$1))
{var c__4148__auto___32851 = cljs.core.chunk_first.call(null,seq__32836_32850__$1);{
var G__32852 = cljs.core.chunk_rest.call(null,seq__32836_32850__$1);
var G__32853 = c__4148__auto___32851;
var G__32854 = cljs.core.count.call(null,c__4148__auto___32851);
var G__32855 = 0;
seq__32836_32840 = G__32852;
chunk__32837_32841 = G__32853;
count__32838_32842 = G__32854;
i__32839_32843 = G__32855;
continue;
}
} else
{var n_32856 = cljs.core.first.call(null,seq__32836_32850__$1);n_32856.removeAttribute(cljs.core.name.call(null,name));
{
var G__32857 = cljs.core.next.call(null,seq__32836_32850__$1);
var G__32858 = null;
var G__32859 = 0;
var G__32860 = 0;
seq__32836_32840 = G__32857;
chunk__32837_32841 = G__32858;
count__32838_32842 = G__32859;
i__32839_32843 = G__32860;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32862 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32862,0,null);var v = cljs.core.nth.call(null,vec__32862,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__32863_SHARP_){var attr = attrs__$1.item(p1__32863_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32870_32876 = cljs.core.seq.call(null,styles);var chunk__32871_32877 = null;var count__32872_32878 = 0;var i__32873_32879 = 0;while(true){
if((i__32873_32879 < count__32872_32878))
{var vec__32874_32880 = cljs.core._nth.call(null,chunk__32871_32877,i__32873_32879);var name_32881 = cljs.core.nth.call(null,vec__32874_32880,0,null);var value_32882 = cljs.core.nth.call(null,vec__32874_32880,1,null);domina.set_style_BANG_.call(null,content,name_32881,value_32882);
{
var G__32883 = seq__32870_32876;
var G__32884 = chunk__32871_32877;
var G__32885 = count__32872_32878;
var G__32886 = (i__32873_32879 + 1);
seq__32870_32876 = G__32883;
chunk__32871_32877 = G__32884;
count__32872_32878 = G__32885;
i__32873_32879 = G__32886;
continue;
}
} else
{var temp__4092__auto___32887 = cljs.core.seq.call(null,seq__32870_32876);if(temp__4092__auto___32887)
{var seq__32870_32888__$1 = temp__4092__auto___32887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32870_32888__$1))
{var c__4148__auto___32889 = cljs.core.chunk_first.call(null,seq__32870_32888__$1);{
var G__32890 = cljs.core.chunk_rest.call(null,seq__32870_32888__$1);
var G__32891 = c__4148__auto___32889;
var G__32892 = cljs.core.count.call(null,c__4148__auto___32889);
var G__32893 = 0;
seq__32870_32876 = G__32890;
chunk__32871_32877 = G__32891;
count__32872_32878 = G__32892;
i__32873_32879 = G__32893;
continue;
}
} else
{var vec__32875_32894 = cljs.core.first.call(null,seq__32870_32888__$1);var name_32895 = cljs.core.nth.call(null,vec__32875_32894,0,null);var value_32896 = cljs.core.nth.call(null,vec__32875_32894,1,null);domina.set_style_BANG_.call(null,content,name_32895,value_32896);
{
var G__32897 = cljs.core.next.call(null,seq__32870_32888__$1);
var G__32898 = null;
var G__32899 = 0;
var G__32900 = 0;
seq__32870_32876 = G__32897;
chunk__32871_32877 = G__32898;
count__32872_32878 = G__32899;
i__32873_32879 = G__32900;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32907_32913 = cljs.core.seq.call(null,attrs);var chunk__32908_32914 = null;var count__32909_32915 = 0;var i__32910_32916 = 0;while(true){
if((i__32910_32916 < count__32909_32915))
{var vec__32911_32917 = cljs.core._nth.call(null,chunk__32908_32914,i__32910_32916);var name_32918 = cljs.core.nth.call(null,vec__32911_32917,0,null);var value_32919 = cljs.core.nth.call(null,vec__32911_32917,1,null);domina.set_attr_BANG_.call(null,content,name_32918,value_32919);
{
var G__32920 = seq__32907_32913;
var G__32921 = chunk__32908_32914;
var G__32922 = count__32909_32915;
var G__32923 = (i__32910_32916 + 1);
seq__32907_32913 = G__32920;
chunk__32908_32914 = G__32921;
count__32909_32915 = G__32922;
i__32910_32916 = G__32923;
continue;
}
} else
{var temp__4092__auto___32924 = cljs.core.seq.call(null,seq__32907_32913);if(temp__4092__auto___32924)
{var seq__32907_32925__$1 = temp__4092__auto___32924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32907_32925__$1))
{var c__4148__auto___32926 = cljs.core.chunk_first.call(null,seq__32907_32925__$1);{
var G__32927 = cljs.core.chunk_rest.call(null,seq__32907_32925__$1);
var G__32928 = c__4148__auto___32926;
var G__32929 = cljs.core.count.call(null,c__4148__auto___32926);
var G__32930 = 0;
seq__32907_32913 = G__32927;
chunk__32908_32914 = G__32928;
count__32909_32915 = G__32929;
i__32910_32916 = G__32930;
continue;
}
} else
{var vec__32912_32931 = cljs.core.first.call(null,seq__32907_32925__$1);var name_32932 = cljs.core.nth.call(null,vec__32912_32931,0,null);var value_32933 = cljs.core.nth.call(null,vec__32912_32931,1,null);domina.set_attr_BANG_.call(null,content,name_32932,value_32933);
{
var G__32934 = cljs.core.next.call(null,seq__32907_32925__$1);
var G__32935 = null;
var G__32936 = 0;
var G__32937 = 0;
seq__32907_32913 = G__32934;
chunk__32908_32914 = G__32935;
count__32909_32915 = G__32936;
i__32910_32916 = G__32937;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32942_32946 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32943_32947 = null;var count__32944_32948 = 0;var i__32945_32949 = 0;while(true){
if((i__32945_32949 < count__32944_32948))
{var node_32950 = cljs.core._nth.call(null,chunk__32943_32947,i__32945_32949);goog.dom.classes.add(node_32950,class$);
{
var G__32951 = seq__32942_32946;
var G__32952 = chunk__32943_32947;
var G__32953 = count__32944_32948;
var G__32954 = (i__32945_32949 + 1);
seq__32942_32946 = G__32951;
chunk__32943_32947 = G__32952;
count__32944_32948 = G__32953;
i__32945_32949 = G__32954;
continue;
}
} else
{var temp__4092__auto___32955 = cljs.core.seq.call(null,seq__32942_32946);if(temp__4092__auto___32955)
{var seq__32942_32956__$1 = temp__4092__auto___32955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32942_32956__$1))
{var c__4148__auto___32957 = cljs.core.chunk_first.call(null,seq__32942_32956__$1);{
var G__32958 = cljs.core.chunk_rest.call(null,seq__32942_32956__$1);
var G__32959 = c__4148__auto___32957;
var G__32960 = cljs.core.count.call(null,c__4148__auto___32957);
var G__32961 = 0;
seq__32942_32946 = G__32958;
chunk__32943_32947 = G__32959;
count__32944_32948 = G__32960;
i__32945_32949 = G__32961;
continue;
}
} else
{var node_32962 = cljs.core.first.call(null,seq__32942_32956__$1);goog.dom.classes.add(node_32962,class$);
{
var G__32963 = cljs.core.next.call(null,seq__32942_32956__$1);
var G__32964 = null;
var G__32965 = 0;
var G__32966 = 0;
seq__32942_32946 = G__32963;
chunk__32943_32947 = G__32964;
count__32944_32948 = G__32965;
i__32945_32949 = G__32966;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__32971_32975 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32972_32976 = null;var count__32973_32977 = 0;var i__32974_32978 = 0;while(true){
if((i__32974_32978 < count__32973_32977))
{var node_32979 = cljs.core._nth.call(null,chunk__32972_32976,i__32974_32978);goog.dom.classes.remove(node_32979,class$);
{
var G__32980 = seq__32971_32975;
var G__32981 = chunk__32972_32976;
var G__32982 = count__32973_32977;
var G__32983 = (i__32974_32978 + 1);
seq__32971_32975 = G__32980;
chunk__32972_32976 = G__32981;
count__32973_32977 = G__32982;
i__32974_32978 = G__32983;
continue;
}
} else
{var temp__4092__auto___32984 = cljs.core.seq.call(null,seq__32971_32975);if(temp__4092__auto___32984)
{var seq__32971_32985__$1 = temp__4092__auto___32984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32971_32985__$1))
{var c__4148__auto___32986 = cljs.core.chunk_first.call(null,seq__32971_32985__$1);{
var G__32987 = cljs.core.chunk_rest.call(null,seq__32971_32985__$1);
var G__32988 = c__4148__auto___32986;
var G__32989 = cljs.core.count.call(null,c__4148__auto___32986);
var G__32990 = 0;
seq__32971_32975 = G__32987;
chunk__32972_32976 = G__32988;
count__32973_32977 = G__32989;
i__32974_32978 = G__32990;
continue;
}
} else
{var node_32991 = cljs.core.first.call(null,seq__32971_32985__$1);goog.dom.classes.remove(node_32991,class$);
{
var G__32992 = cljs.core.next.call(null,seq__32971_32985__$1);
var G__32993 = null;
var G__32994 = 0;
var G__32995 = 0;
seq__32971_32975 = G__32992;
chunk__32972_32976 = G__32993;
count__32973_32977 = G__32994;
i__32974_32978 = G__32995;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33000_33004 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33001_33005 = null;var count__33002_33006 = 0;var i__33003_33007 = 0;while(true){
if((i__33003_33007 < count__33002_33006))
{var node_33008 = cljs.core._nth.call(null,chunk__33001_33005,i__33003_33007);goog.dom.classes.toggle(node_33008,class$);
{
var G__33009 = seq__33000_33004;
var G__33010 = chunk__33001_33005;
var G__33011 = count__33002_33006;
var G__33012 = (i__33003_33007 + 1);
seq__33000_33004 = G__33009;
chunk__33001_33005 = G__33010;
count__33002_33006 = G__33011;
i__33003_33007 = G__33012;
continue;
}
} else
{var temp__4092__auto___33013 = cljs.core.seq.call(null,seq__33000_33004);if(temp__4092__auto___33013)
{var seq__33000_33014__$1 = temp__4092__auto___33013;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33000_33014__$1))
{var c__4148__auto___33015 = cljs.core.chunk_first.call(null,seq__33000_33014__$1);{
var G__33016 = cljs.core.chunk_rest.call(null,seq__33000_33014__$1);
var G__33017 = c__4148__auto___33015;
var G__33018 = cljs.core.count.call(null,c__4148__auto___33015);
var G__33019 = 0;
seq__33000_33004 = G__33016;
chunk__33001_33005 = G__33017;
count__33002_33006 = G__33018;
i__33003_33007 = G__33019;
continue;
}
} else
{var node_33020 = cljs.core.first.call(null,seq__33000_33014__$1);goog.dom.classes.toggle(node_33020,class$);
{
var G__33021 = cljs.core.next.call(null,seq__33000_33014__$1);
var G__33022 = null;
var G__33023 = 0;
var G__33024 = 0;
seq__33000_33004 = G__33021;
chunk__33001_33005 = G__33022;
count__33002_33006 = G__33023;
i__33003_33007 = G__33024;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33033__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33029_33034 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33030_33035 = null;var count__33031_33036 = 0;var i__33032_33037 = 0;while(true){
if((i__33032_33037 < count__33031_33036))
{var node_33038 = cljs.core._nth.call(null,chunk__33030_33035,i__33032_33037);goog.dom.classes.set(node_33038,classes_33033__$1);
{
var G__33039 = seq__33029_33034;
var G__33040 = chunk__33030_33035;
var G__33041 = count__33031_33036;
var G__33042 = (i__33032_33037 + 1);
seq__33029_33034 = G__33039;
chunk__33030_33035 = G__33040;
count__33031_33036 = G__33041;
i__33032_33037 = G__33042;
continue;
}
} else
{var temp__4092__auto___33043 = cljs.core.seq.call(null,seq__33029_33034);if(temp__4092__auto___33043)
{var seq__33029_33044__$1 = temp__4092__auto___33043;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33029_33044__$1))
{var c__4148__auto___33045 = cljs.core.chunk_first.call(null,seq__33029_33044__$1);{
var G__33046 = cljs.core.chunk_rest.call(null,seq__33029_33044__$1);
var G__33047 = c__4148__auto___33045;
var G__33048 = cljs.core.count.call(null,c__4148__auto___33045);
var G__33049 = 0;
seq__33029_33034 = G__33046;
chunk__33030_33035 = G__33047;
count__33031_33036 = G__33048;
i__33032_33037 = G__33049;
continue;
}
} else
{var node_33050 = cljs.core.first.call(null,seq__33029_33044__$1);goog.dom.classes.set(node_33050,classes_33033__$1);
{
var G__33051 = cljs.core.next.call(null,seq__33029_33044__$1);
var G__33052 = null;
var G__33053 = 0;
var G__33054 = 0;
seq__33029_33034 = G__33051;
chunk__33030_33035 = G__33052;
count__33031_33036 = G__33053;
i__33032_33037 = G__33054;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33059_33063 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33060_33064 = null;var count__33061_33065 = 0;var i__33062_33066 = 0;while(true){
if((i__33062_33066 < count__33061_33065))
{var node_33067 = cljs.core._nth.call(null,chunk__33060_33064,i__33062_33066);goog.dom.setTextContent(node_33067,value);
{
var G__33068 = seq__33059_33063;
var G__33069 = chunk__33060_33064;
var G__33070 = count__33061_33065;
var G__33071 = (i__33062_33066 + 1);
seq__33059_33063 = G__33068;
chunk__33060_33064 = G__33069;
count__33061_33065 = G__33070;
i__33062_33066 = G__33071;
continue;
}
} else
{var temp__4092__auto___33072 = cljs.core.seq.call(null,seq__33059_33063);if(temp__4092__auto___33072)
{var seq__33059_33073__$1 = temp__4092__auto___33072;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33059_33073__$1))
{var c__4148__auto___33074 = cljs.core.chunk_first.call(null,seq__33059_33073__$1);{
var G__33075 = cljs.core.chunk_rest.call(null,seq__33059_33073__$1);
var G__33076 = c__4148__auto___33074;
var G__33077 = cljs.core.count.call(null,c__4148__auto___33074);
var G__33078 = 0;
seq__33059_33063 = G__33075;
chunk__33060_33064 = G__33076;
count__33061_33065 = G__33077;
i__33062_33066 = G__33078;
continue;
}
} else
{var node_33079 = cljs.core.first.call(null,seq__33059_33073__$1);goog.dom.setTextContent(node_33079,value);
{
var G__33080 = cljs.core.next.call(null,seq__33059_33073__$1);
var G__33081 = null;
var G__33082 = 0;
var G__33083 = 0;
seq__33059_33063 = G__33080;
chunk__33060_33064 = G__33081;
count__33061_33065 = G__33082;
i__33062_33066 = G__33083;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33088_33092 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33089_33093 = null;var count__33090_33094 = 0;var i__33091_33095 = 0;while(true){
if((i__33091_33095 < count__33090_33094))
{var node_33096 = cljs.core._nth.call(null,chunk__33089_33093,i__33091_33095);goog.dom.forms.setValue(node_33096,value);
{
var G__33097 = seq__33088_33092;
var G__33098 = chunk__33089_33093;
var G__33099 = count__33090_33094;
var G__33100 = (i__33091_33095 + 1);
seq__33088_33092 = G__33097;
chunk__33089_33093 = G__33098;
count__33090_33094 = G__33099;
i__33091_33095 = G__33100;
continue;
}
} else
{var temp__4092__auto___33101 = cljs.core.seq.call(null,seq__33088_33092);if(temp__4092__auto___33101)
{var seq__33088_33102__$1 = temp__4092__auto___33101;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33088_33102__$1))
{var c__4148__auto___33103 = cljs.core.chunk_first.call(null,seq__33088_33102__$1);{
var G__33104 = cljs.core.chunk_rest.call(null,seq__33088_33102__$1);
var G__33105 = c__4148__auto___33103;
var G__33106 = cljs.core.count.call(null,c__4148__auto___33103);
var G__33107 = 0;
seq__33088_33092 = G__33104;
chunk__33089_33093 = G__33105;
count__33090_33094 = G__33106;
i__33091_33095 = G__33107;
continue;
}
} else
{var node_33108 = cljs.core.first.call(null,seq__33088_33102__$1);goog.dom.forms.setValue(node_33108,value);
{
var G__33109 = cljs.core.next.call(null,seq__33088_33102__$1);
var G__33110 = null;
var G__33111 = 0;
var G__33112 = 0;
seq__33088_33092 = G__33109;
chunk__33089_33093 = G__33110;
count__33090_33094 = G__33111;
i__33091_33095 = G__33112;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_33123 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33119_33124 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33120_33125 = null;var count__33121_33126 = 0;var i__33122_33127 = 0;while(true){
if((i__33122_33127 < count__33121_33126))
{var node_33128 = cljs.core._nth.call(null,chunk__33120_33125,i__33122_33127);node_33128.innerHTML = value_33123;
{
var G__33129 = seq__33119_33124;
var G__33130 = chunk__33120_33125;
var G__33131 = count__33121_33126;
var G__33132 = (i__33122_33127 + 1);
seq__33119_33124 = G__33129;
chunk__33120_33125 = G__33130;
count__33121_33126 = G__33131;
i__33122_33127 = G__33132;
continue;
}
} else
{var temp__4092__auto___33133 = cljs.core.seq.call(null,seq__33119_33124);if(temp__4092__auto___33133)
{var seq__33119_33134__$1 = temp__4092__auto___33133;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33119_33134__$1))
{var c__4148__auto___33135 = cljs.core.chunk_first.call(null,seq__33119_33134__$1);{
var G__33136 = cljs.core.chunk_rest.call(null,seq__33119_33134__$1);
var G__33137 = c__4148__auto___33135;
var G__33138 = cljs.core.count.call(null,c__4148__auto___33135);
var G__33139 = 0;
seq__33119_33124 = G__33136;
chunk__33120_33125 = G__33137;
count__33121_33126 = G__33138;
i__33122_33127 = G__33139;
continue;
}
} else
{var node_33140 = cljs.core.first.call(null,seq__33119_33134__$1);node_33140.innerHTML = value_33123;
{
var G__33141 = cljs.core.next.call(null,seq__33119_33134__$1);
var G__33142 = null;
var G__33143 = 0;
var G__33144 = 0;
seq__33119_33124 = G__33141;
chunk__33120_33125 = G__33142;
count__33121_33126 = G__33143;
i__33122_33127 = G__33144;
continue;
}
}
} else
{}
}
break;
}
}catch (e33118){if((e33118 instanceof Error))
{var e_33145 = e33118;domina.replace_children_BANG_.call(null,content,value_33123);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33118;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33152_33156 = cljs.core.seq.call(null,children);var chunk__33153_33157 = null;var count__33154_33158 = 0;var i__33155_33159 = 0;while(true){
if((i__33155_33159 < count__33154_33158))
{var child_33160 = cljs.core._nth.call(null,chunk__33153_33157,i__33155_33159);frag.appendChild(child_33160);
{
var G__33161 = seq__33152_33156;
var G__33162 = chunk__33153_33157;
var G__33163 = count__33154_33158;
var G__33164 = (i__33155_33159 + 1);
seq__33152_33156 = G__33161;
chunk__33153_33157 = G__33162;
count__33154_33158 = G__33163;
i__33155_33159 = G__33164;
continue;
}
} else
{var temp__4092__auto___33165 = cljs.core.seq.call(null,seq__33152_33156);if(temp__4092__auto___33165)
{var seq__33152_33166__$1 = temp__4092__auto___33165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33152_33166__$1))
{var c__4148__auto___33167 = cljs.core.chunk_first.call(null,seq__33152_33166__$1);{
var G__33168 = cljs.core.chunk_rest.call(null,seq__33152_33166__$1);
var G__33169 = c__4148__auto___33167;
var G__33170 = cljs.core.count.call(null,c__4148__auto___33167);
var G__33171 = 0;
seq__33152_33156 = G__33168;
chunk__33153_33157 = G__33169;
count__33154_33158 = G__33170;
i__33155_33159 = G__33171;
continue;
}
} else
{var child_33172 = cljs.core.first.call(null,seq__33152_33166__$1);frag.appendChild(child_33172);
{
var G__33173 = cljs.core.next.call(null,seq__33152_33166__$1);
var G__33174 = null;
var G__33175 = 0;
var G__33176 = 0;
seq__33152_33156 = G__33173;
chunk__33153_33157 = G__33174;
count__33154_33158 = G__33175;
i__33155_33159 = G__33176;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__33146_SHARP_,p2__33147_SHARP_){return f.call(null,p1__33146_SHARP_,p2__33147_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__33178 = list_thing;if(G__33178)
{var bit__4050__auto__ = (G__33178.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33178.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33178.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33178);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33178);
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
{if((function (){var G__33179 = content;if(G__33179)
{var bit__4050__auto__ = (G__33179.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33179.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33179.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33179);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33179);
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
{if((function (){var G__33180 = content;if(G__33180)
{var bit__4050__auto__ = (G__33180.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__33180.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33180.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33180);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33180);
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
