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
var opt_wrapper_36799 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36800 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36801 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36800,table_section_wrapper_36800,opt_wrapper_36799,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36801,table_section_wrapper_36800,cell_wrapper_36801,opt_wrapper_36799,table_section_wrapper_36800,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36800]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36806 = cljs.core.seq.call(null,tbody);var chunk__36807 = null;var count__36808 = 0;var i__36809 = 0;while(true){
if((i__36809 < count__36808))
{var child = cljs.core._nth.call(null,chunk__36807,i__36809);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36810 = seq__36806;
var G__36811 = chunk__36807;
var G__36812 = count__36808;
var G__36813 = (i__36809 + 1);
seq__36806 = G__36810;
chunk__36807 = G__36811;
count__36808 = G__36812;
i__36809 = G__36813;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36806);if(temp__4092__auto__)
{var seq__36806__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36806__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36806__$1);{
var G__36814 = cljs.core.chunk_rest.call(null,seq__36806__$1);
var G__36815 = c__4148__auto__;
var G__36816 = cljs.core.count.call(null,c__4148__auto__);
var G__36817 = 0;
seq__36806 = G__36814;
chunk__36807 = G__36815;
count__36808 = G__36816;
i__36809 = G__36817;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36806__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36818 = cljs.core.next.call(null,seq__36806__$1);
var G__36819 = null;
var G__36820 = 0;
var G__36821 = 0;
seq__36806 = G__36818;
chunk__36807 = G__36819;
count__36808 = G__36820;
i__36809 = G__36821;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36823 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36823,0,null);var start_wrap = cljs.core.nth.call(null,vec__36823,1,null);var end_wrap = cljs.core.nth.call(null,vec__36823,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36824 = wrapper.lastChild;
var G__36825 = (level - 1);
wrapper = G__36824;
level = G__36825;
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
domina.DomContent = (function (){var obj36827 = {};return obj36827;
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
log_debug.cljs$lang$applyTo = (function (arglist__36828){
var mesg = cljs.core.seq(arglist__36828);
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
log.cljs$lang$applyTo = (function (arglist__36829){
var mesg = cljs.core.seq(arglist__36829);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36830){
var contents = cljs.core.seq(arglist__36830);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36831_SHARP_){return p1__36831_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36832_SHARP_,p2__36833_SHARP_){return goog.dom.insertChildAt(p1__36832_SHARP_,p2__36833_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36835_SHARP_,p2__36834_SHARP_){return goog.dom.insertSiblingBefore(p2__36834_SHARP_,p1__36835_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36837_SHARP_,p2__36836_SHARP_){return goog.dom.insertSiblingAfter(p2__36836_SHARP_,p1__36837_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36839_SHARP_,p2__36838_SHARP_){return goog.dom.replaceNode(p2__36838_SHARP_,p1__36839_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36844_36848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36845_36849 = null;var count__36846_36850 = 0;var i__36847_36851 = 0;while(true){
if((i__36847_36851 < count__36846_36850))
{var n_36852 = cljs.core._nth.call(null,chunk__36845_36849,i__36847_36851);goog.style.setStyle(n_36852,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36853 = seq__36844_36848;
var G__36854 = chunk__36845_36849;
var G__36855 = count__36846_36850;
var G__36856 = (i__36847_36851 + 1);
seq__36844_36848 = G__36853;
chunk__36845_36849 = G__36854;
count__36846_36850 = G__36855;
i__36847_36851 = G__36856;
continue;
}
} else
{var temp__4092__auto___36857 = cljs.core.seq.call(null,seq__36844_36848);if(temp__4092__auto___36857)
{var seq__36844_36858__$1 = temp__4092__auto___36857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36844_36858__$1))
{var c__4148__auto___36859 = cljs.core.chunk_first.call(null,seq__36844_36858__$1);{
var G__36860 = cljs.core.chunk_rest.call(null,seq__36844_36858__$1);
var G__36861 = c__4148__auto___36859;
var G__36862 = cljs.core.count.call(null,c__4148__auto___36859);
var G__36863 = 0;
seq__36844_36848 = G__36860;
chunk__36845_36849 = G__36861;
count__36846_36850 = G__36862;
i__36847_36851 = G__36863;
continue;
}
} else
{var n_36864 = cljs.core.first.call(null,seq__36844_36858__$1);goog.style.setStyle(n_36864,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36865 = cljs.core.next.call(null,seq__36844_36858__$1);
var G__36866 = null;
var G__36867 = 0;
var G__36868 = 0;
seq__36844_36848 = G__36865;
chunk__36845_36849 = G__36866;
count__36846_36850 = G__36867;
i__36847_36851 = G__36868;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36869){
var content = cljs.core.first(arglist__36869);
arglist__36869 = cljs.core.next(arglist__36869);
var name = cljs.core.first(arglist__36869);
var value = cljs.core.rest(arglist__36869);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36874_36878 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36875_36879 = null;var count__36876_36880 = 0;var i__36877_36881 = 0;while(true){
if((i__36877_36881 < count__36876_36880))
{var n_36882 = cljs.core._nth.call(null,chunk__36875_36879,i__36877_36881);n_36882.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36883 = seq__36874_36878;
var G__36884 = chunk__36875_36879;
var G__36885 = count__36876_36880;
var G__36886 = (i__36877_36881 + 1);
seq__36874_36878 = G__36883;
chunk__36875_36879 = G__36884;
count__36876_36880 = G__36885;
i__36877_36881 = G__36886;
continue;
}
} else
{var temp__4092__auto___36887 = cljs.core.seq.call(null,seq__36874_36878);if(temp__4092__auto___36887)
{var seq__36874_36888__$1 = temp__4092__auto___36887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36874_36888__$1))
{var c__4148__auto___36889 = cljs.core.chunk_first.call(null,seq__36874_36888__$1);{
var G__36890 = cljs.core.chunk_rest.call(null,seq__36874_36888__$1);
var G__36891 = c__4148__auto___36889;
var G__36892 = cljs.core.count.call(null,c__4148__auto___36889);
var G__36893 = 0;
seq__36874_36878 = G__36890;
chunk__36875_36879 = G__36891;
count__36876_36880 = G__36892;
i__36877_36881 = G__36893;
continue;
}
} else
{var n_36894 = cljs.core.first.call(null,seq__36874_36888__$1);n_36894.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36895 = cljs.core.next.call(null,seq__36874_36888__$1);
var G__36896 = null;
var G__36897 = 0;
var G__36898 = 0;
seq__36874_36878 = G__36895;
chunk__36875_36879 = G__36896;
count__36876_36880 = G__36897;
i__36877_36881 = G__36898;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36899){
var content = cljs.core.first(arglist__36899);
arglist__36899 = cljs.core.next(arglist__36899);
var name = cljs.core.first(arglist__36899);
var value = cljs.core.rest(arglist__36899);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36904_36908 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36905_36909 = null;var count__36906_36910 = 0;var i__36907_36911 = 0;while(true){
if((i__36907_36911 < count__36906_36910))
{var n_36912 = cljs.core._nth.call(null,chunk__36905_36909,i__36907_36911);n_36912.removeAttribute(cljs.core.name.call(null,name));
{
var G__36913 = seq__36904_36908;
var G__36914 = chunk__36905_36909;
var G__36915 = count__36906_36910;
var G__36916 = (i__36907_36911 + 1);
seq__36904_36908 = G__36913;
chunk__36905_36909 = G__36914;
count__36906_36910 = G__36915;
i__36907_36911 = G__36916;
continue;
}
} else
{var temp__4092__auto___36917 = cljs.core.seq.call(null,seq__36904_36908);if(temp__4092__auto___36917)
{var seq__36904_36918__$1 = temp__4092__auto___36917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36904_36918__$1))
{var c__4148__auto___36919 = cljs.core.chunk_first.call(null,seq__36904_36918__$1);{
var G__36920 = cljs.core.chunk_rest.call(null,seq__36904_36918__$1);
var G__36921 = c__4148__auto___36919;
var G__36922 = cljs.core.count.call(null,c__4148__auto___36919);
var G__36923 = 0;
seq__36904_36908 = G__36920;
chunk__36905_36909 = G__36921;
count__36906_36910 = G__36922;
i__36907_36911 = G__36923;
continue;
}
} else
{var n_36924 = cljs.core.first.call(null,seq__36904_36918__$1);n_36924.removeAttribute(cljs.core.name.call(null,name));
{
var G__36925 = cljs.core.next.call(null,seq__36904_36918__$1);
var G__36926 = null;
var G__36927 = 0;
var G__36928 = 0;
seq__36904_36908 = G__36925;
chunk__36905_36909 = G__36926;
count__36906_36910 = G__36927;
i__36907_36911 = G__36928;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36930 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36930,0,null);var v = cljs.core.nth.call(null,vec__36930,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36931_SHARP_){var attr = attrs__$1.item(p1__36931_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36938_36944 = cljs.core.seq.call(null,styles);var chunk__36939_36945 = null;var count__36940_36946 = 0;var i__36941_36947 = 0;while(true){
if((i__36941_36947 < count__36940_36946))
{var vec__36942_36948 = cljs.core._nth.call(null,chunk__36939_36945,i__36941_36947);var name_36949 = cljs.core.nth.call(null,vec__36942_36948,0,null);var value_36950 = cljs.core.nth.call(null,vec__36942_36948,1,null);domina.set_style_BANG_.call(null,content,name_36949,value_36950);
{
var G__36951 = seq__36938_36944;
var G__36952 = chunk__36939_36945;
var G__36953 = count__36940_36946;
var G__36954 = (i__36941_36947 + 1);
seq__36938_36944 = G__36951;
chunk__36939_36945 = G__36952;
count__36940_36946 = G__36953;
i__36941_36947 = G__36954;
continue;
}
} else
{var temp__4092__auto___36955 = cljs.core.seq.call(null,seq__36938_36944);if(temp__4092__auto___36955)
{var seq__36938_36956__$1 = temp__4092__auto___36955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36938_36956__$1))
{var c__4148__auto___36957 = cljs.core.chunk_first.call(null,seq__36938_36956__$1);{
var G__36958 = cljs.core.chunk_rest.call(null,seq__36938_36956__$1);
var G__36959 = c__4148__auto___36957;
var G__36960 = cljs.core.count.call(null,c__4148__auto___36957);
var G__36961 = 0;
seq__36938_36944 = G__36958;
chunk__36939_36945 = G__36959;
count__36940_36946 = G__36960;
i__36941_36947 = G__36961;
continue;
}
} else
{var vec__36943_36962 = cljs.core.first.call(null,seq__36938_36956__$1);var name_36963 = cljs.core.nth.call(null,vec__36943_36962,0,null);var value_36964 = cljs.core.nth.call(null,vec__36943_36962,1,null);domina.set_style_BANG_.call(null,content,name_36963,value_36964);
{
var G__36965 = cljs.core.next.call(null,seq__36938_36956__$1);
var G__36966 = null;
var G__36967 = 0;
var G__36968 = 0;
seq__36938_36944 = G__36965;
chunk__36939_36945 = G__36966;
count__36940_36946 = G__36967;
i__36941_36947 = G__36968;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36975_36981 = cljs.core.seq.call(null,attrs);var chunk__36976_36982 = null;var count__36977_36983 = 0;var i__36978_36984 = 0;while(true){
if((i__36978_36984 < count__36977_36983))
{var vec__36979_36985 = cljs.core._nth.call(null,chunk__36976_36982,i__36978_36984);var name_36986 = cljs.core.nth.call(null,vec__36979_36985,0,null);var value_36987 = cljs.core.nth.call(null,vec__36979_36985,1,null);domina.set_attr_BANG_.call(null,content,name_36986,value_36987);
{
var G__36988 = seq__36975_36981;
var G__36989 = chunk__36976_36982;
var G__36990 = count__36977_36983;
var G__36991 = (i__36978_36984 + 1);
seq__36975_36981 = G__36988;
chunk__36976_36982 = G__36989;
count__36977_36983 = G__36990;
i__36978_36984 = G__36991;
continue;
}
} else
{var temp__4092__auto___36992 = cljs.core.seq.call(null,seq__36975_36981);if(temp__4092__auto___36992)
{var seq__36975_36993__$1 = temp__4092__auto___36992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36975_36993__$1))
{var c__4148__auto___36994 = cljs.core.chunk_first.call(null,seq__36975_36993__$1);{
var G__36995 = cljs.core.chunk_rest.call(null,seq__36975_36993__$1);
var G__36996 = c__4148__auto___36994;
var G__36997 = cljs.core.count.call(null,c__4148__auto___36994);
var G__36998 = 0;
seq__36975_36981 = G__36995;
chunk__36976_36982 = G__36996;
count__36977_36983 = G__36997;
i__36978_36984 = G__36998;
continue;
}
} else
{var vec__36980_36999 = cljs.core.first.call(null,seq__36975_36993__$1);var name_37000 = cljs.core.nth.call(null,vec__36980_36999,0,null);var value_37001 = cljs.core.nth.call(null,vec__36980_36999,1,null);domina.set_attr_BANG_.call(null,content,name_37000,value_37001);
{
var G__37002 = cljs.core.next.call(null,seq__36975_36993__$1);
var G__37003 = null;
var G__37004 = 0;
var G__37005 = 0;
seq__36975_36981 = G__37002;
chunk__36976_36982 = G__37003;
count__36977_36983 = G__37004;
i__36978_36984 = G__37005;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37010_37014 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37011_37015 = null;var count__37012_37016 = 0;var i__37013_37017 = 0;while(true){
if((i__37013_37017 < count__37012_37016))
{var node_37018 = cljs.core._nth.call(null,chunk__37011_37015,i__37013_37017);goog.dom.classes.add(node_37018,class$);
{
var G__37019 = seq__37010_37014;
var G__37020 = chunk__37011_37015;
var G__37021 = count__37012_37016;
var G__37022 = (i__37013_37017 + 1);
seq__37010_37014 = G__37019;
chunk__37011_37015 = G__37020;
count__37012_37016 = G__37021;
i__37013_37017 = G__37022;
continue;
}
} else
{var temp__4092__auto___37023 = cljs.core.seq.call(null,seq__37010_37014);if(temp__4092__auto___37023)
{var seq__37010_37024__$1 = temp__4092__auto___37023;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37010_37024__$1))
{var c__4148__auto___37025 = cljs.core.chunk_first.call(null,seq__37010_37024__$1);{
var G__37026 = cljs.core.chunk_rest.call(null,seq__37010_37024__$1);
var G__37027 = c__4148__auto___37025;
var G__37028 = cljs.core.count.call(null,c__4148__auto___37025);
var G__37029 = 0;
seq__37010_37014 = G__37026;
chunk__37011_37015 = G__37027;
count__37012_37016 = G__37028;
i__37013_37017 = G__37029;
continue;
}
} else
{var node_37030 = cljs.core.first.call(null,seq__37010_37024__$1);goog.dom.classes.add(node_37030,class$);
{
var G__37031 = cljs.core.next.call(null,seq__37010_37024__$1);
var G__37032 = null;
var G__37033 = 0;
var G__37034 = 0;
seq__37010_37014 = G__37031;
chunk__37011_37015 = G__37032;
count__37012_37016 = G__37033;
i__37013_37017 = G__37034;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37039_37043 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37040_37044 = null;var count__37041_37045 = 0;var i__37042_37046 = 0;while(true){
if((i__37042_37046 < count__37041_37045))
{var node_37047 = cljs.core._nth.call(null,chunk__37040_37044,i__37042_37046);goog.dom.classes.remove(node_37047,class$);
{
var G__37048 = seq__37039_37043;
var G__37049 = chunk__37040_37044;
var G__37050 = count__37041_37045;
var G__37051 = (i__37042_37046 + 1);
seq__37039_37043 = G__37048;
chunk__37040_37044 = G__37049;
count__37041_37045 = G__37050;
i__37042_37046 = G__37051;
continue;
}
} else
{var temp__4092__auto___37052 = cljs.core.seq.call(null,seq__37039_37043);if(temp__4092__auto___37052)
{var seq__37039_37053__$1 = temp__4092__auto___37052;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37039_37053__$1))
{var c__4148__auto___37054 = cljs.core.chunk_first.call(null,seq__37039_37053__$1);{
var G__37055 = cljs.core.chunk_rest.call(null,seq__37039_37053__$1);
var G__37056 = c__4148__auto___37054;
var G__37057 = cljs.core.count.call(null,c__4148__auto___37054);
var G__37058 = 0;
seq__37039_37043 = G__37055;
chunk__37040_37044 = G__37056;
count__37041_37045 = G__37057;
i__37042_37046 = G__37058;
continue;
}
} else
{var node_37059 = cljs.core.first.call(null,seq__37039_37053__$1);goog.dom.classes.remove(node_37059,class$);
{
var G__37060 = cljs.core.next.call(null,seq__37039_37053__$1);
var G__37061 = null;
var G__37062 = 0;
var G__37063 = 0;
seq__37039_37043 = G__37060;
chunk__37040_37044 = G__37061;
count__37041_37045 = G__37062;
i__37042_37046 = G__37063;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37068_37072 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37069_37073 = null;var count__37070_37074 = 0;var i__37071_37075 = 0;while(true){
if((i__37071_37075 < count__37070_37074))
{var node_37076 = cljs.core._nth.call(null,chunk__37069_37073,i__37071_37075);goog.dom.classes.toggle(node_37076,class$);
{
var G__37077 = seq__37068_37072;
var G__37078 = chunk__37069_37073;
var G__37079 = count__37070_37074;
var G__37080 = (i__37071_37075 + 1);
seq__37068_37072 = G__37077;
chunk__37069_37073 = G__37078;
count__37070_37074 = G__37079;
i__37071_37075 = G__37080;
continue;
}
} else
{var temp__4092__auto___37081 = cljs.core.seq.call(null,seq__37068_37072);if(temp__4092__auto___37081)
{var seq__37068_37082__$1 = temp__4092__auto___37081;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37068_37082__$1))
{var c__4148__auto___37083 = cljs.core.chunk_first.call(null,seq__37068_37082__$1);{
var G__37084 = cljs.core.chunk_rest.call(null,seq__37068_37082__$1);
var G__37085 = c__4148__auto___37083;
var G__37086 = cljs.core.count.call(null,c__4148__auto___37083);
var G__37087 = 0;
seq__37068_37072 = G__37084;
chunk__37069_37073 = G__37085;
count__37070_37074 = G__37086;
i__37071_37075 = G__37087;
continue;
}
} else
{var node_37088 = cljs.core.first.call(null,seq__37068_37082__$1);goog.dom.classes.toggle(node_37088,class$);
{
var G__37089 = cljs.core.next.call(null,seq__37068_37082__$1);
var G__37090 = null;
var G__37091 = 0;
var G__37092 = 0;
seq__37068_37072 = G__37089;
chunk__37069_37073 = G__37090;
count__37070_37074 = G__37091;
i__37071_37075 = G__37092;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37101__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37097_37102 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37098_37103 = null;var count__37099_37104 = 0;var i__37100_37105 = 0;while(true){
if((i__37100_37105 < count__37099_37104))
{var node_37106 = cljs.core._nth.call(null,chunk__37098_37103,i__37100_37105);goog.dom.classes.set(node_37106,classes_37101__$1);
{
var G__37107 = seq__37097_37102;
var G__37108 = chunk__37098_37103;
var G__37109 = count__37099_37104;
var G__37110 = (i__37100_37105 + 1);
seq__37097_37102 = G__37107;
chunk__37098_37103 = G__37108;
count__37099_37104 = G__37109;
i__37100_37105 = G__37110;
continue;
}
} else
{var temp__4092__auto___37111 = cljs.core.seq.call(null,seq__37097_37102);if(temp__4092__auto___37111)
{var seq__37097_37112__$1 = temp__4092__auto___37111;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37097_37112__$1))
{var c__4148__auto___37113 = cljs.core.chunk_first.call(null,seq__37097_37112__$1);{
var G__37114 = cljs.core.chunk_rest.call(null,seq__37097_37112__$1);
var G__37115 = c__4148__auto___37113;
var G__37116 = cljs.core.count.call(null,c__4148__auto___37113);
var G__37117 = 0;
seq__37097_37102 = G__37114;
chunk__37098_37103 = G__37115;
count__37099_37104 = G__37116;
i__37100_37105 = G__37117;
continue;
}
} else
{var node_37118 = cljs.core.first.call(null,seq__37097_37112__$1);goog.dom.classes.set(node_37118,classes_37101__$1);
{
var G__37119 = cljs.core.next.call(null,seq__37097_37112__$1);
var G__37120 = null;
var G__37121 = 0;
var G__37122 = 0;
seq__37097_37102 = G__37119;
chunk__37098_37103 = G__37120;
count__37099_37104 = G__37121;
i__37100_37105 = G__37122;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37127_37131 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37128_37132 = null;var count__37129_37133 = 0;var i__37130_37134 = 0;while(true){
if((i__37130_37134 < count__37129_37133))
{var node_37135 = cljs.core._nth.call(null,chunk__37128_37132,i__37130_37134);goog.dom.setTextContent(node_37135,value);
{
var G__37136 = seq__37127_37131;
var G__37137 = chunk__37128_37132;
var G__37138 = count__37129_37133;
var G__37139 = (i__37130_37134 + 1);
seq__37127_37131 = G__37136;
chunk__37128_37132 = G__37137;
count__37129_37133 = G__37138;
i__37130_37134 = G__37139;
continue;
}
} else
{var temp__4092__auto___37140 = cljs.core.seq.call(null,seq__37127_37131);if(temp__4092__auto___37140)
{var seq__37127_37141__$1 = temp__4092__auto___37140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37127_37141__$1))
{var c__4148__auto___37142 = cljs.core.chunk_first.call(null,seq__37127_37141__$1);{
var G__37143 = cljs.core.chunk_rest.call(null,seq__37127_37141__$1);
var G__37144 = c__4148__auto___37142;
var G__37145 = cljs.core.count.call(null,c__4148__auto___37142);
var G__37146 = 0;
seq__37127_37131 = G__37143;
chunk__37128_37132 = G__37144;
count__37129_37133 = G__37145;
i__37130_37134 = G__37146;
continue;
}
} else
{var node_37147 = cljs.core.first.call(null,seq__37127_37141__$1);goog.dom.setTextContent(node_37147,value);
{
var G__37148 = cljs.core.next.call(null,seq__37127_37141__$1);
var G__37149 = null;
var G__37150 = 0;
var G__37151 = 0;
seq__37127_37131 = G__37148;
chunk__37128_37132 = G__37149;
count__37129_37133 = G__37150;
i__37130_37134 = G__37151;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37156_37160 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37157_37161 = null;var count__37158_37162 = 0;var i__37159_37163 = 0;while(true){
if((i__37159_37163 < count__37158_37162))
{var node_37164 = cljs.core._nth.call(null,chunk__37157_37161,i__37159_37163);goog.dom.forms.setValue(node_37164,value);
{
var G__37165 = seq__37156_37160;
var G__37166 = chunk__37157_37161;
var G__37167 = count__37158_37162;
var G__37168 = (i__37159_37163 + 1);
seq__37156_37160 = G__37165;
chunk__37157_37161 = G__37166;
count__37158_37162 = G__37167;
i__37159_37163 = G__37168;
continue;
}
} else
{var temp__4092__auto___37169 = cljs.core.seq.call(null,seq__37156_37160);if(temp__4092__auto___37169)
{var seq__37156_37170__$1 = temp__4092__auto___37169;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37156_37170__$1))
{var c__4148__auto___37171 = cljs.core.chunk_first.call(null,seq__37156_37170__$1);{
var G__37172 = cljs.core.chunk_rest.call(null,seq__37156_37170__$1);
var G__37173 = c__4148__auto___37171;
var G__37174 = cljs.core.count.call(null,c__4148__auto___37171);
var G__37175 = 0;
seq__37156_37160 = G__37172;
chunk__37157_37161 = G__37173;
count__37158_37162 = G__37174;
i__37159_37163 = G__37175;
continue;
}
} else
{var node_37176 = cljs.core.first.call(null,seq__37156_37170__$1);goog.dom.forms.setValue(node_37176,value);
{
var G__37177 = cljs.core.next.call(null,seq__37156_37170__$1);
var G__37178 = null;
var G__37179 = 0;
var G__37180 = 0;
seq__37156_37160 = G__37177;
chunk__37157_37161 = G__37178;
count__37158_37162 = G__37179;
i__37159_37163 = G__37180;
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
{var value_37191 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37187_37192 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37188_37193 = null;var count__37189_37194 = 0;var i__37190_37195 = 0;while(true){
if((i__37190_37195 < count__37189_37194))
{var node_37196 = cljs.core._nth.call(null,chunk__37188_37193,i__37190_37195);node_37196.innerHTML = value_37191;
{
var G__37197 = seq__37187_37192;
var G__37198 = chunk__37188_37193;
var G__37199 = count__37189_37194;
var G__37200 = (i__37190_37195 + 1);
seq__37187_37192 = G__37197;
chunk__37188_37193 = G__37198;
count__37189_37194 = G__37199;
i__37190_37195 = G__37200;
continue;
}
} else
{var temp__4092__auto___37201 = cljs.core.seq.call(null,seq__37187_37192);if(temp__4092__auto___37201)
{var seq__37187_37202__$1 = temp__4092__auto___37201;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37187_37202__$1))
{var c__4148__auto___37203 = cljs.core.chunk_first.call(null,seq__37187_37202__$1);{
var G__37204 = cljs.core.chunk_rest.call(null,seq__37187_37202__$1);
var G__37205 = c__4148__auto___37203;
var G__37206 = cljs.core.count.call(null,c__4148__auto___37203);
var G__37207 = 0;
seq__37187_37192 = G__37204;
chunk__37188_37193 = G__37205;
count__37189_37194 = G__37206;
i__37190_37195 = G__37207;
continue;
}
} else
{var node_37208 = cljs.core.first.call(null,seq__37187_37202__$1);node_37208.innerHTML = value_37191;
{
var G__37209 = cljs.core.next.call(null,seq__37187_37202__$1);
var G__37210 = null;
var G__37211 = 0;
var G__37212 = 0;
seq__37187_37192 = G__37209;
chunk__37188_37193 = G__37210;
count__37189_37194 = G__37211;
i__37190_37195 = G__37212;
continue;
}
}
} else
{}
}
break;
}
}catch (e37186){if((e37186 instanceof Error))
{var e_37213 = e37186;domina.replace_children_BANG_.call(null,content,value_37191);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37186;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37220_37224 = cljs.core.seq.call(null,children);var chunk__37221_37225 = null;var count__37222_37226 = 0;var i__37223_37227 = 0;while(true){
if((i__37223_37227 < count__37222_37226))
{var child_37228 = cljs.core._nth.call(null,chunk__37221_37225,i__37223_37227);frag.appendChild(child_37228);
{
var G__37229 = seq__37220_37224;
var G__37230 = chunk__37221_37225;
var G__37231 = count__37222_37226;
var G__37232 = (i__37223_37227 + 1);
seq__37220_37224 = G__37229;
chunk__37221_37225 = G__37230;
count__37222_37226 = G__37231;
i__37223_37227 = G__37232;
continue;
}
} else
{var temp__4092__auto___37233 = cljs.core.seq.call(null,seq__37220_37224);if(temp__4092__auto___37233)
{var seq__37220_37234__$1 = temp__4092__auto___37233;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37220_37234__$1))
{var c__4148__auto___37235 = cljs.core.chunk_first.call(null,seq__37220_37234__$1);{
var G__37236 = cljs.core.chunk_rest.call(null,seq__37220_37234__$1);
var G__37237 = c__4148__auto___37235;
var G__37238 = cljs.core.count.call(null,c__4148__auto___37235);
var G__37239 = 0;
seq__37220_37224 = G__37236;
chunk__37221_37225 = G__37237;
count__37222_37226 = G__37238;
i__37223_37227 = G__37239;
continue;
}
} else
{var child_37240 = cljs.core.first.call(null,seq__37220_37234__$1);frag.appendChild(child_37240);
{
var G__37241 = cljs.core.next.call(null,seq__37220_37234__$1);
var G__37242 = null;
var G__37243 = 0;
var G__37244 = 0;
seq__37220_37224 = G__37241;
chunk__37221_37225 = G__37242;
count__37222_37226 = G__37243;
i__37223_37227 = G__37244;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__37214_SHARP_,p2__37215_SHARP_){return f.call(null,p1__37214_SHARP_,p2__37215_SHARP_);
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
{if((function (){var G__37246 = list_thing;if(G__37246)
{var bit__4050__auto__ = (G__37246.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37246.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37246.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37246);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37246);
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
{if((function (){var G__37247 = content;if(G__37247)
{var bit__4050__auto__ = (G__37247.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37247.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37247.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37247);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37247);
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
{if((function (){var G__37248 = content;if(G__37248)
{var bit__4050__auto__ = (G__37248.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37248.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37248.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37248);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37248);
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
