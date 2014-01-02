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
var opt_wrapper_33784 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_33785 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_33786 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_33785,table_section_wrapper_33785,opt_wrapper_33784,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_33786,table_section_wrapper_33785,cell_wrapper_33786,opt_wrapper_33784,table_section_wrapper_33785,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_33785]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__33791 = cljs.core.seq.call(null,tbody);var chunk__33792 = null;var count__33793 = 0;var i__33794 = 0;while(true){
if((i__33794 < count__33793))
{var child = cljs.core._nth.call(null,chunk__33792,i__33794);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33795 = seq__33791;
var G__33796 = chunk__33792;
var G__33797 = count__33793;
var G__33798 = (i__33794 + 1);
seq__33791 = G__33795;
chunk__33792 = G__33796;
count__33793 = G__33797;
i__33794 = G__33798;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__33791);if(temp__4092__auto__)
{var seq__33791__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33791__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__33791__$1);{
var G__33799 = cljs.core.chunk_rest.call(null,seq__33791__$1);
var G__33800 = c__4015__auto__;
var G__33801 = cljs.core.count.call(null,c__4015__auto__);
var G__33802 = 0;
seq__33791 = G__33799;
chunk__33792 = G__33800;
count__33793 = G__33801;
i__33794 = G__33802;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__33791__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__33803 = cljs.core.next.call(null,seq__33791__$1);
var G__33804 = null;
var G__33805 = 0;
var G__33806 = 0;
seq__33791 = G__33803;
chunk__33792 = G__33804;
count__33793 = G__33805;
i__33794 = G__33806;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__33808 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__33808,0,null);var start_wrap = cljs.core.nth.call(null,vec__33808,1,null);var end_wrap = cljs.core.nth.call(null,vec__33808,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__33809 = wrapper.lastChild;
var G__33810 = (level - 1);
wrapper = G__33809;
level = G__33810;
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
domina.DomContent = (function (){var obj33812 = {};return obj33812;
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
log_debug.cljs$lang$applyTo = (function (arglist__33813){
var mesg = cljs.core.seq(arglist__33813);
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
log.cljs$lang$applyTo = (function (arglist__33814){
var mesg = cljs.core.seq(arglist__33814);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__33815){
var contents = cljs.core.seq(arglist__33815);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__33816_SHARP_){return p1__33816_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__33817_SHARP_,p2__33818_SHARP_){return goog.dom.insertChildAt(p1__33817_SHARP_,p2__33818_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33820_SHARP_,p2__33819_SHARP_){return goog.dom.insertSiblingBefore(p2__33819_SHARP_,p1__33820_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__33822_SHARP_,p2__33821_SHARP_){return goog.dom.insertSiblingAfter(p2__33821_SHARP_,p1__33822_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__33824_SHARP_,p2__33823_SHARP_){return goog.dom.replaceNode(p2__33823_SHARP_,p1__33824_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__33829_33833 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33830_33834 = null;var count__33831_33835 = 0;var i__33832_33836 = 0;while(true){
if((i__33832_33836 < count__33831_33835))
{var n_33837 = cljs.core._nth.call(null,chunk__33830_33834,i__33832_33836);goog.style.setStyle(n_33837,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33838 = seq__33829_33833;
var G__33839 = chunk__33830_33834;
var G__33840 = count__33831_33835;
var G__33841 = (i__33832_33836 + 1);
seq__33829_33833 = G__33838;
chunk__33830_33834 = G__33839;
count__33831_33835 = G__33840;
i__33832_33836 = G__33841;
continue;
}
} else
{var temp__4092__auto___33842 = cljs.core.seq.call(null,seq__33829_33833);if(temp__4092__auto___33842)
{var seq__33829_33843__$1 = temp__4092__auto___33842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33829_33843__$1))
{var c__4015__auto___33844 = cljs.core.chunk_first.call(null,seq__33829_33843__$1);{
var G__33845 = cljs.core.chunk_rest.call(null,seq__33829_33843__$1);
var G__33846 = c__4015__auto___33844;
var G__33847 = cljs.core.count.call(null,c__4015__auto___33844);
var G__33848 = 0;
seq__33829_33833 = G__33845;
chunk__33830_33834 = G__33846;
count__33831_33835 = G__33847;
i__33832_33836 = G__33848;
continue;
}
} else
{var n_33849 = cljs.core.first.call(null,seq__33829_33843__$1);goog.style.setStyle(n_33849,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33850 = cljs.core.next.call(null,seq__33829_33843__$1);
var G__33851 = null;
var G__33852 = 0;
var G__33853 = 0;
seq__33829_33833 = G__33850;
chunk__33830_33834 = G__33851;
count__33831_33835 = G__33852;
i__33832_33836 = G__33853;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__33854){
var content = cljs.core.first(arglist__33854);
arglist__33854 = cljs.core.next(arglist__33854);
var name = cljs.core.first(arglist__33854);
var value = cljs.core.rest(arglist__33854);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__33859_33863 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33860_33864 = null;var count__33861_33865 = 0;var i__33862_33866 = 0;while(true){
if((i__33862_33866 < count__33861_33865))
{var n_33867 = cljs.core._nth.call(null,chunk__33860_33864,i__33862_33866);n_33867.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33868 = seq__33859_33863;
var G__33869 = chunk__33860_33864;
var G__33870 = count__33861_33865;
var G__33871 = (i__33862_33866 + 1);
seq__33859_33863 = G__33868;
chunk__33860_33864 = G__33869;
count__33861_33865 = G__33870;
i__33862_33866 = G__33871;
continue;
}
} else
{var temp__4092__auto___33872 = cljs.core.seq.call(null,seq__33859_33863);if(temp__4092__auto___33872)
{var seq__33859_33873__$1 = temp__4092__auto___33872;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33859_33873__$1))
{var c__4015__auto___33874 = cljs.core.chunk_first.call(null,seq__33859_33873__$1);{
var G__33875 = cljs.core.chunk_rest.call(null,seq__33859_33873__$1);
var G__33876 = c__4015__auto___33874;
var G__33877 = cljs.core.count.call(null,c__4015__auto___33874);
var G__33878 = 0;
seq__33859_33863 = G__33875;
chunk__33860_33864 = G__33876;
count__33861_33865 = G__33877;
i__33862_33866 = G__33878;
continue;
}
} else
{var n_33879 = cljs.core.first.call(null,seq__33859_33873__$1);n_33879.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__33880 = cljs.core.next.call(null,seq__33859_33873__$1);
var G__33881 = null;
var G__33882 = 0;
var G__33883 = 0;
seq__33859_33863 = G__33880;
chunk__33860_33864 = G__33881;
count__33861_33865 = G__33882;
i__33862_33866 = G__33883;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__33884){
var content = cljs.core.first(arglist__33884);
arglist__33884 = cljs.core.next(arglist__33884);
var name = cljs.core.first(arglist__33884);
var value = cljs.core.rest(arglist__33884);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__33889_33893 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33890_33894 = null;var count__33891_33895 = 0;var i__33892_33896 = 0;while(true){
if((i__33892_33896 < count__33891_33895))
{var n_33897 = cljs.core._nth.call(null,chunk__33890_33894,i__33892_33896);n_33897.removeAttribute(cljs.core.name.call(null,name));
{
var G__33898 = seq__33889_33893;
var G__33899 = chunk__33890_33894;
var G__33900 = count__33891_33895;
var G__33901 = (i__33892_33896 + 1);
seq__33889_33893 = G__33898;
chunk__33890_33894 = G__33899;
count__33891_33895 = G__33900;
i__33892_33896 = G__33901;
continue;
}
} else
{var temp__4092__auto___33902 = cljs.core.seq.call(null,seq__33889_33893);if(temp__4092__auto___33902)
{var seq__33889_33903__$1 = temp__4092__auto___33902;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33889_33903__$1))
{var c__4015__auto___33904 = cljs.core.chunk_first.call(null,seq__33889_33903__$1);{
var G__33905 = cljs.core.chunk_rest.call(null,seq__33889_33903__$1);
var G__33906 = c__4015__auto___33904;
var G__33907 = cljs.core.count.call(null,c__4015__auto___33904);
var G__33908 = 0;
seq__33889_33893 = G__33905;
chunk__33890_33894 = G__33906;
count__33891_33895 = G__33907;
i__33892_33896 = G__33908;
continue;
}
} else
{var n_33909 = cljs.core.first.call(null,seq__33889_33903__$1);n_33909.removeAttribute(cljs.core.name.call(null,name));
{
var G__33910 = cljs.core.next.call(null,seq__33889_33903__$1);
var G__33911 = null;
var G__33912 = 0;
var G__33913 = 0;
seq__33889_33893 = G__33910;
chunk__33890_33894 = G__33911;
count__33891_33895 = G__33912;
i__33892_33896 = G__33913;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__33915 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__33915,0,null);var v = cljs.core.nth.call(null,vec__33915,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__33916_SHARP_){var attr = attrs__$1.item(p1__33916_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__33923_33929 = cljs.core.seq.call(null,styles);var chunk__33924_33930 = null;var count__33925_33931 = 0;var i__33926_33932 = 0;while(true){
if((i__33926_33932 < count__33925_33931))
{var vec__33927_33933 = cljs.core._nth.call(null,chunk__33924_33930,i__33926_33932);var name_33934 = cljs.core.nth.call(null,vec__33927_33933,0,null);var value_33935 = cljs.core.nth.call(null,vec__33927_33933,1,null);domina.set_style_BANG_.call(null,content,name_33934,value_33935);
{
var G__33936 = seq__33923_33929;
var G__33937 = chunk__33924_33930;
var G__33938 = count__33925_33931;
var G__33939 = (i__33926_33932 + 1);
seq__33923_33929 = G__33936;
chunk__33924_33930 = G__33937;
count__33925_33931 = G__33938;
i__33926_33932 = G__33939;
continue;
}
} else
{var temp__4092__auto___33940 = cljs.core.seq.call(null,seq__33923_33929);if(temp__4092__auto___33940)
{var seq__33923_33941__$1 = temp__4092__auto___33940;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33923_33941__$1))
{var c__4015__auto___33942 = cljs.core.chunk_first.call(null,seq__33923_33941__$1);{
var G__33943 = cljs.core.chunk_rest.call(null,seq__33923_33941__$1);
var G__33944 = c__4015__auto___33942;
var G__33945 = cljs.core.count.call(null,c__4015__auto___33942);
var G__33946 = 0;
seq__33923_33929 = G__33943;
chunk__33924_33930 = G__33944;
count__33925_33931 = G__33945;
i__33926_33932 = G__33946;
continue;
}
} else
{var vec__33928_33947 = cljs.core.first.call(null,seq__33923_33941__$1);var name_33948 = cljs.core.nth.call(null,vec__33928_33947,0,null);var value_33949 = cljs.core.nth.call(null,vec__33928_33947,1,null);domina.set_style_BANG_.call(null,content,name_33948,value_33949);
{
var G__33950 = cljs.core.next.call(null,seq__33923_33941__$1);
var G__33951 = null;
var G__33952 = 0;
var G__33953 = 0;
seq__33923_33929 = G__33950;
chunk__33924_33930 = G__33951;
count__33925_33931 = G__33952;
i__33926_33932 = G__33953;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__33960_33966 = cljs.core.seq.call(null,attrs);var chunk__33961_33967 = null;var count__33962_33968 = 0;var i__33963_33969 = 0;while(true){
if((i__33963_33969 < count__33962_33968))
{var vec__33964_33970 = cljs.core._nth.call(null,chunk__33961_33967,i__33963_33969);var name_33971 = cljs.core.nth.call(null,vec__33964_33970,0,null);var value_33972 = cljs.core.nth.call(null,vec__33964_33970,1,null);domina.set_attr_BANG_.call(null,content,name_33971,value_33972);
{
var G__33973 = seq__33960_33966;
var G__33974 = chunk__33961_33967;
var G__33975 = count__33962_33968;
var G__33976 = (i__33963_33969 + 1);
seq__33960_33966 = G__33973;
chunk__33961_33967 = G__33974;
count__33962_33968 = G__33975;
i__33963_33969 = G__33976;
continue;
}
} else
{var temp__4092__auto___33977 = cljs.core.seq.call(null,seq__33960_33966);if(temp__4092__auto___33977)
{var seq__33960_33978__$1 = temp__4092__auto___33977;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33960_33978__$1))
{var c__4015__auto___33979 = cljs.core.chunk_first.call(null,seq__33960_33978__$1);{
var G__33980 = cljs.core.chunk_rest.call(null,seq__33960_33978__$1);
var G__33981 = c__4015__auto___33979;
var G__33982 = cljs.core.count.call(null,c__4015__auto___33979);
var G__33983 = 0;
seq__33960_33966 = G__33980;
chunk__33961_33967 = G__33981;
count__33962_33968 = G__33982;
i__33963_33969 = G__33983;
continue;
}
} else
{var vec__33965_33984 = cljs.core.first.call(null,seq__33960_33978__$1);var name_33985 = cljs.core.nth.call(null,vec__33965_33984,0,null);var value_33986 = cljs.core.nth.call(null,vec__33965_33984,1,null);domina.set_attr_BANG_.call(null,content,name_33985,value_33986);
{
var G__33987 = cljs.core.next.call(null,seq__33960_33978__$1);
var G__33988 = null;
var G__33989 = 0;
var G__33990 = 0;
seq__33960_33966 = G__33987;
chunk__33961_33967 = G__33988;
count__33962_33968 = G__33989;
i__33963_33969 = G__33990;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__33995_33999 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33996_34000 = null;var count__33997_34001 = 0;var i__33998_34002 = 0;while(true){
if((i__33998_34002 < count__33997_34001))
{var node_34003 = cljs.core._nth.call(null,chunk__33996_34000,i__33998_34002);goog.dom.classes.add(node_34003,class$);
{
var G__34004 = seq__33995_33999;
var G__34005 = chunk__33996_34000;
var G__34006 = count__33997_34001;
var G__34007 = (i__33998_34002 + 1);
seq__33995_33999 = G__34004;
chunk__33996_34000 = G__34005;
count__33997_34001 = G__34006;
i__33998_34002 = G__34007;
continue;
}
} else
{var temp__4092__auto___34008 = cljs.core.seq.call(null,seq__33995_33999);if(temp__4092__auto___34008)
{var seq__33995_34009__$1 = temp__4092__auto___34008;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33995_34009__$1))
{var c__4015__auto___34010 = cljs.core.chunk_first.call(null,seq__33995_34009__$1);{
var G__34011 = cljs.core.chunk_rest.call(null,seq__33995_34009__$1);
var G__34012 = c__4015__auto___34010;
var G__34013 = cljs.core.count.call(null,c__4015__auto___34010);
var G__34014 = 0;
seq__33995_33999 = G__34011;
chunk__33996_34000 = G__34012;
count__33997_34001 = G__34013;
i__33998_34002 = G__34014;
continue;
}
} else
{var node_34015 = cljs.core.first.call(null,seq__33995_34009__$1);goog.dom.classes.add(node_34015,class$);
{
var G__34016 = cljs.core.next.call(null,seq__33995_34009__$1);
var G__34017 = null;
var G__34018 = 0;
var G__34019 = 0;
seq__33995_33999 = G__34016;
chunk__33996_34000 = G__34017;
count__33997_34001 = G__34018;
i__33998_34002 = G__34019;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__34024_34028 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34025_34029 = null;var count__34026_34030 = 0;var i__34027_34031 = 0;while(true){
if((i__34027_34031 < count__34026_34030))
{var node_34032 = cljs.core._nth.call(null,chunk__34025_34029,i__34027_34031);goog.dom.classes.remove(node_34032,class$);
{
var G__34033 = seq__34024_34028;
var G__34034 = chunk__34025_34029;
var G__34035 = count__34026_34030;
var G__34036 = (i__34027_34031 + 1);
seq__34024_34028 = G__34033;
chunk__34025_34029 = G__34034;
count__34026_34030 = G__34035;
i__34027_34031 = G__34036;
continue;
}
} else
{var temp__4092__auto___34037 = cljs.core.seq.call(null,seq__34024_34028);if(temp__4092__auto___34037)
{var seq__34024_34038__$1 = temp__4092__auto___34037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34024_34038__$1))
{var c__4015__auto___34039 = cljs.core.chunk_first.call(null,seq__34024_34038__$1);{
var G__34040 = cljs.core.chunk_rest.call(null,seq__34024_34038__$1);
var G__34041 = c__4015__auto___34039;
var G__34042 = cljs.core.count.call(null,c__4015__auto___34039);
var G__34043 = 0;
seq__34024_34028 = G__34040;
chunk__34025_34029 = G__34041;
count__34026_34030 = G__34042;
i__34027_34031 = G__34043;
continue;
}
} else
{var node_34044 = cljs.core.first.call(null,seq__34024_34038__$1);goog.dom.classes.remove(node_34044,class$);
{
var G__34045 = cljs.core.next.call(null,seq__34024_34038__$1);
var G__34046 = null;
var G__34047 = 0;
var G__34048 = 0;
seq__34024_34028 = G__34045;
chunk__34025_34029 = G__34046;
count__34026_34030 = G__34047;
i__34027_34031 = G__34048;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__34053_34057 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34054_34058 = null;var count__34055_34059 = 0;var i__34056_34060 = 0;while(true){
if((i__34056_34060 < count__34055_34059))
{var node_34061 = cljs.core._nth.call(null,chunk__34054_34058,i__34056_34060);goog.dom.classes.toggle(node_34061,class$);
{
var G__34062 = seq__34053_34057;
var G__34063 = chunk__34054_34058;
var G__34064 = count__34055_34059;
var G__34065 = (i__34056_34060 + 1);
seq__34053_34057 = G__34062;
chunk__34054_34058 = G__34063;
count__34055_34059 = G__34064;
i__34056_34060 = G__34065;
continue;
}
} else
{var temp__4092__auto___34066 = cljs.core.seq.call(null,seq__34053_34057);if(temp__4092__auto___34066)
{var seq__34053_34067__$1 = temp__4092__auto___34066;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34053_34067__$1))
{var c__4015__auto___34068 = cljs.core.chunk_first.call(null,seq__34053_34067__$1);{
var G__34069 = cljs.core.chunk_rest.call(null,seq__34053_34067__$1);
var G__34070 = c__4015__auto___34068;
var G__34071 = cljs.core.count.call(null,c__4015__auto___34068);
var G__34072 = 0;
seq__34053_34057 = G__34069;
chunk__34054_34058 = G__34070;
count__34055_34059 = G__34071;
i__34056_34060 = G__34072;
continue;
}
} else
{var node_34073 = cljs.core.first.call(null,seq__34053_34067__$1);goog.dom.classes.toggle(node_34073,class$);
{
var G__34074 = cljs.core.next.call(null,seq__34053_34067__$1);
var G__34075 = null;
var G__34076 = 0;
var G__34077 = 0;
seq__34053_34057 = G__34074;
chunk__34054_34058 = G__34075;
count__34055_34059 = G__34076;
i__34056_34060 = G__34077;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_34086__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__34082_34087 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34083_34088 = null;var count__34084_34089 = 0;var i__34085_34090 = 0;while(true){
if((i__34085_34090 < count__34084_34089))
{var node_34091 = cljs.core._nth.call(null,chunk__34083_34088,i__34085_34090);goog.dom.classes.set(node_34091,classes_34086__$1);
{
var G__34092 = seq__34082_34087;
var G__34093 = chunk__34083_34088;
var G__34094 = count__34084_34089;
var G__34095 = (i__34085_34090 + 1);
seq__34082_34087 = G__34092;
chunk__34083_34088 = G__34093;
count__34084_34089 = G__34094;
i__34085_34090 = G__34095;
continue;
}
} else
{var temp__4092__auto___34096 = cljs.core.seq.call(null,seq__34082_34087);if(temp__4092__auto___34096)
{var seq__34082_34097__$1 = temp__4092__auto___34096;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34082_34097__$1))
{var c__4015__auto___34098 = cljs.core.chunk_first.call(null,seq__34082_34097__$1);{
var G__34099 = cljs.core.chunk_rest.call(null,seq__34082_34097__$1);
var G__34100 = c__4015__auto___34098;
var G__34101 = cljs.core.count.call(null,c__4015__auto___34098);
var G__34102 = 0;
seq__34082_34087 = G__34099;
chunk__34083_34088 = G__34100;
count__34084_34089 = G__34101;
i__34085_34090 = G__34102;
continue;
}
} else
{var node_34103 = cljs.core.first.call(null,seq__34082_34097__$1);goog.dom.classes.set(node_34103,classes_34086__$1);
{
var G__34104 = cljs.core.next.call(null,seq__34082_34097__$1);
var G__34105 = null;
var G__34106 = 0;
var G__34107 = 0;
seq__34082_34087 = G__34104;
chunk__34083_34088 = G__34105;
count__34084_34089 = G__34106;
i__34085_34090 = G__34107;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__34112_34116 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34113_34117 = null;var count__34114_34118 = 0;var i__34115_34119 = 0;while(true){
if((i__34115_34119 < count__34114_34118))
{var node_34120 = cljs.core._nth.call(null,chunk__34113_34117,i__34115_34119);goog.dom.setTextContent(node_34120,value);
{
var G__34121 = seq__34112_34116;
var G__34122 = chunk__34113_34117;
var G__34123 = count__34114_34118;
var G__34124 = (i__34115_34119 + 1);
seq__34112_34116 = G__34121;
chunk__34113_34117 = G__34122;
count__34114_34118 = G__34123;
i__34115_34119 = G__34124;
continue;
}
} else
{var temp__4092__auto___34125 = cljs.core.seq.call(null,seq__34112_34116);if(temp__4092__auto___34125)
{var seq__34112_34126__$1 = temp__4092__auto___34125;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34112_34126__$1))
{var c__4015__auto___34127 = cljs.core.chunk_first.call(null,seq__34112_34126__$1);{
var G__34128 = cljs.core.chunk_rest.call(null,seq__34112_34126__$1);
var G__34129 = c__4015__auto___34127;
var G__34130 = cljs.core.count.call(null,c__4015__auto___34127);
var G__34131 = 0;
seq__34112_34116 = G__34128;
chunk__34113_34117 = G__34129;
count__34114_34118 = G__34130;
i__34115_34119 = G__34131;
continue;
}
} else
{var node_34132 = cljs.core.first.call(null,seq__34112_34126__$1);goog.dom.setTextContent(node_34132,value);
{
var G__34133 = cljs.core.next.call(null,seq__34112_34126__$1);
var G__34134 = null;
var G__34135 = 0;
var G__34136 = 0;
seq__34112_34116 = G__34133;
chunk__34113_34117 = G__34134;
count__34114_34118 = G__34135;
i__34115_34119 = G__34136;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__34141_34145 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34142_34146 = null;var count__34143_34147 = 0;var i__34144_34148 = 0;while(true){
if((i__34144_34148 < count__34143_34147))
{var node_34149 = cljs.core._nth.call(null,chunk__34142_34146,i__34144_34148);goog.dom.forms.setValue(node_34149,value);
{
var G__34150 = seq__34141_34145;
var G__34151 = chunk__34142_34146;
var G__34152 = count__34143_34147;
var G__34153 = (i__34144_34148 + 1);
seq__34141_34145 = G__34150;
chunk__34142_34146 = G__34151;
count__34143_34147 = G__34152;
i__34144_34148 = G__34153;
continue;
}
} else
{var temp__4092__auto___34154 = cljs.core.seq.call(null,seq__34141_34145);if(temp__4092__auto___34154)
{var seq__34141_34155__$1 = temp__4092__auto___34154;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34141_34155__$1))
{var c__4015__auto___34156 = cljs.core.chunk_first.call(null,seq__34141_34155__$1);{
var G__34157 = cljs.core.chunk_rest.call(null,seq__34141_34155__$1);
var G__34158 = c__4015__auto___34156;
var G__34159 = cljs.core.count.call(null,c__4015__auto___34156);
var G__34160 = 0;
seq__34141_34145 = G__34157;
chunk__34142_34146 = G__34158;
count__34143_34147 = G__34159;
i__34144_34148 = G__34160;
continue;
}
} else
{var node_34161 = cljs.core.first.call(null,seq__34141_34155__$1);goog.dom.forms.setValue(node_34161,value);
{
var G__34162 = cljs.core.next.call(null,seq__34141_34155__$1);
var G__34163 = null;
var G__34164 = 0;
var G__34165 = 0;
seq__34141_34145 = G__34162;
chunk__34142_34146 = G__34163;
count__34143_34147 = G__34164;
i__34144_34148 = G__34165;
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
{var value_34176 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__34172_34177 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34173_34178 = null;var count__34174_34179 = 0;var i__34175_34180 = 0;while(true){
if((i__34175_34180 < count__34174_34179))
{var node_34181 = cljs.core._nth.call(null,chunk__34173_34178,i__34175_34180);node_34181.innerHTML = value_34176;
{
var G__34182 = seq__34172_34177;
var G__34183 = chunk__34173_34178;
var G__34184 = count__34174_34179;
var G__34185 = (i__34175_34180 + 1);
seq__34172_34177 = G__34182;
chunk__34173_34178 = G__34183;
count__34174_34179 = G__34184;
i__34175_34180 = G__34185;
continue;
}
} else
{var temp__4092__auto___34186 = cljs.core.seq.call(null,seq__34172_34177);if(temp__4092__auto___34186)
{var seq__34172_34187__$1 = temp__4092__auto___34186;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34172_34187__$1))
{var c__4015__auto___34188 = cljs.core.chunk_first.call(null,seq__34172_34187__$1);{
var G__34189 = cljs.core.chunk_rest.call(null,seq__34172_34187__$1);
var G__34190 = c__4015__auto___34188;
var G__34191 = cljs.core.count.call(null,c__4015__auto___34188);
var G__34192 = 0;
seq__34172_34177 = G__34189;
chunk__34173_34178 = G__34190;
count__34174_34179 = G__34191;
i__34175_34180 = G__34192;
continue;
}
} else
{var node_34193 = cljs.core.first.call(null,seq__34172_34187__$1);node_34193.innerHTML = value_34176;
{
var G__34194 = cljs.core.next.call(null,seq__34172_34187__$1);
var G__34195 = null;
var G__34196 = 0;
var G__34197 = 0;
seq__34172_34177 = G__34194;
chunk__34173_34178 = G__34195;
count__34174_34179 = G__34196;
i__34175_34180 = G__34197;
continue;
}
}
} else
{}
}
break;
}
}catch (e34171){if((e34171 instanceof Error))
{var e_34198 = e34171;domina.replace_children_BANG_.call(null,content,value_34176);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34171;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__34205_34209 = cljs.core.seq.call(null,children);var chunk__34206_34210 = null;var count__34207_34211 = 0;var i__34208_34212 = 0;while(true){
if((i__34208_34212 < count__34207_34211))
{var child_34213 = cljs.core._nth.call(null,chunk__34206_34210,i__34208_34212);frag.appendChild(child_34213);
{
var G__34214 = seq__34205_34209;
var G__34215 = chunk__34206_34210;
var G__34216 = count__34207_34211;
var G__34217 = (i__34208_34212 + 1);
seq__34205_34209 = G__34214;
chunk__34206_34210 = G__34215;
count__34207_34211 = G__34216;
i__34208_34212 = G__34217;
continue;
}
} else
{var temp__4092__auto___34218 = cljs.core.seq.call(null,seq__34205_34209);if(temp__4092__auto___34218)
{var seq__34205_34219__$1 = temp__4092__auto___34218;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34205_34219__$1))
{var c__4015__auto___34220 = cljs.core.chunk_first.call(null,seq__34205_34219__$1);{
var G__34221 = cljs.core.chunk_rest.call(null,seq__34205_34219__$1);
var G__34222 = c__4015__auto___34220;
var G__34223 = cljs.core.count.call(null,c__4015__auto___34220);
var G__34224 = 0;
seq__34205_34209 = G__34221;
chunk__34206_34210 = G__34222;
count__34207_34211 = G__34223;
i__34208_34212 = G__34224;
continue;
}
} else
{var child_34225 = cljs.core.first.call(null,seq__34205_34219__$1);frag.appendChild(child_34225);
{
var G__34226 = cljs.core.next.call(null,seq__34205_34219__$1);
var G__34227 = null;
var G__34228 = 0;
var G__34229 = 0;
seq__34205_34209 = G__34226;
chunk__34206_34210 = G__34227;
count__34207_34211 = G__34228;
i__34208_34212 = G__34229;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__34199_SHARP_,p2__34200_SHARP_){return f.call(null,p1__34199_SHARP_,p2__34200_SHARP_);
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
{if((function (){var G__34231 = list_thing;if(G__34231)
{var bit__3917__auto__ = (G__34231.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__34231.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34231.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34231);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34231);
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
{if((function (){var G__34232 = content;if(G__34232)
{var bit__3917__auto__ = (G__34232.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__34232.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34232.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34232);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34232);
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
{if((function (){var G__34233 = content;if(G__34233)
{var bit__3917__auto__ = (G__34233.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__34233.cljs$core$ISeqable$))
{return true;
} else
{if((!G__34233.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34233);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__34233);
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
